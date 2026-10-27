/* db.js — IndexedDB untuk simpan file (gambar/video/dokumen) */

class IndexedDBStore {
  constructor(dbName = 'tengkayu-link', storeName = 'files') {
    this.dbName = dbName;
    this.storeName = storeName;
    this.db = null;
  }

  open() {
    if (this.db) return Promise.resolve(this.db);
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }
      };
      req.onsuccess = (e) => { this.db = e.target.result; resolve(this.db); };
      req.onerror = () => reject(req.error);
    });
  }

  async put(file, meta = {}) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(this.storeName, 'readwrite');
      const req = tx.objectStore(this.storeName).add({
        file, meta,
        name: file.name, type: file.type, size: file.size,
        time: Date.now()
      });
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async get(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const req = db.transaction(this.storeName, 'readonly')
        .objectStore(this.storeName).get(id);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async delete(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const req = db.transaction(this.storeName, 'readwrite')
        .objectStore(this.storeName).delete(id);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async clear() {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const req = db.transaction(this.storeName, 'readwrite')
        .objectStore(this.storeName).clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }
}

// Instance global
const FileStore = new IndexedDBStore('tengkayu-link', 'files');

// Helper: ambil file, kembalikan object URL (untuk ditampilkan di <img>/<video>)
async function getStoredFileUrl(id) {
  const rec = await FileStore.get(id);
  if (!rec) return null;
  return URL.createObjectURL(rec.file);
}

// Helper: upload & return id
async function storeFile(file, category = 'general') {
  if (!file) throw new Error('File kosong');
  return await FileStore.put(file, {
    category,
    owner: (typeof State !== 'undefined' && State.user?.name) || 'guest',
    uploadedAt: new Date().toISOString()
  });
}

// Helper: parse embed YouTube / GDrive / Vimeo / direct
function parseMediaUrl(url) {
  if (!url) return null;
  url = url.trim();

  // YouTube (watch, youtu.be, shorts, embed)
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
  if (yt) return { type: 'youtube', id: yt[1], embed: `https://www.youtube.com/embed/${yt[1]}` };

  // Google Drive
  const gd = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/);
  if (gd) return { type: 'gdrive', id: gd[1], embed: `https://drive.google.com/file/d/${gd[1]}/preview` };

  // Vimeo
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return { type: 'vimeo', id: vm[1], embed: `https://player.vimeo.com/video/${vm[1]}` };

  // Direct video / image
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return { type: 'direct-video', url };
  if (/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(url)) return { type: 'direct-image', url };

  return null;
}

// Helper: validasi + upload image
async function uploadImage(file, category = 'image') {
  if (!file.type.startsWith('image/')) { showToast?.('File harus gambar!', 'error'); return null; }
  if (file.size > 5 * 1024 * 1024) { showToast?.('Maksimal 5MB!', 'error'); return null; }
  return await storeFile(file, category);
}

// Helper: validasi + upload video
async function uploadVideo(file, category = 'video') {
  if (!file.type.startsWith('video/')) { showToast?.('File harus video!', 'error'); return null; }
  if (file.size > 100 * 1024 * 1024) { showToast?.('Maksimal 100MB!', 'error'); return null; }
  return await storeFile(file, category);
}

// Helper: validasi + upload dokumen (PDF/gambar)
async function uploadDocument(file, category = 'document') {
  const ok = ['application/pdf', 'image/jpeg', 'image/png'].includes(file.type);
  if (!ok) { showToast?.('Format: PDF/JPG/PNG!', 'error'); return null; }
  if (file.size > 10 * 1024 * 1024) { showToast?.('Maksimal 10MB!', 'error'); return null; }
  return await storeFile(file, category);
}

// Helper: baca gambar ke base64 (untuk preview cepat sebelum disimpan)
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = (e) => resolve(e.target.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}