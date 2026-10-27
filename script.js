/* ==========================================================
   TENGKAYU-LINK — Frontend Logic
   ========================================================== */

// ============ DUMMY DATA ============
const DUMMY_JOBS = [
  { id:1, title:'Operator Cold Storage', company:'PT Bahari Nusantara', sector:'Perikanan/Kelautan', region:'Barat', salary:'Rp 3.5 - 4.5 jt', type:'Full-time', desc:'Mengoperasikan cold storage untuk penyimpanan hasil laut. Diutamakan memiliki pengalaman di industri perikanan.', skills:['Higienitas','Operasional','Fisik Kuat'] },
  { id:2, title:'Barista', company:'Kopi Paguntaka', sector:'Jasa & Perdagangan', region:'Tengah', salary:'Rp 2.5 - 3 jt', type:'Full-time', desc:'Meracik kopi dan melayani pelanggan di kafe lokal. Diutamakan memiliki sertifikat barista.', skills:['Barista','Komunikasi','Pelayanan'] },
  { id:3, title:'Admin Media Sosial', company:'Wisata Mangrove Tarakan', sector:'Pariwisata/Perhotelan', region:'Timur', salary:'Rp 3 - 4 jt', type:'Kontrak', desc:'Mengelola konten media sosial destinasi wisata. Menguasai Canva, CapCut, dan copywriting.', skills:['Medsos','Desain','Copywriting'] },
  { id:4, title:'Pembuat Kripik Rumput Laut', company:'UMKM Sinar Laut', sector:'UMKM/Kriya', region:'Utara', salary:'Rp 2 - 2.5 jt', type:'Part-time', desc:'Memproduksi kripik rumput laut rumahan. Disediakan pelatihan untuk pemula.', skills:['Produksi','Kreativitas'] },
  { id:5, title:'Teknisi Alat Berat', company:'PT Tambang Tarakan', sector:'Pertambangan', region:'Utara', salary:'Rp 6 - 8 jt', type:'Full-time', desc:'Merawat dan memperbaiki alat berat pertambangan. Minimal D3 Teknik Mesin.', skills:['Teknik','Alat Berat','K3'] },
  { id:6, title:'Kasir Resto Seafood', company:'RM Bandeng Juaro', sector:'Jasa & Perdagangan', region:'Tengah', salary:'Rp 2.8 - 3.2 jt', type:'Full-time', desc:'Menangani transaksi kasir dan pelayanan pelanggan. Ramah dan teliti.', skills:['Kasir','Pelayanan','Teliti'] },
  { id:7, title:'Pemandu Wisata Mangrove', company:'Tarakan Explore', sector:'Pariwisata/Perhotelan', region:'Timur', salary:'Rp 3 - 4 jt', type:'Kontrak', desc:'Memandu wisatawan di area mangrove. Menguasai Bahasa Inggris dasar.', skills:['Pemandu','Bahasa Inggris','Komunikasi'] },
  { id:8, title:'Nelayan Kapal Purse Seine', company:'Koperasi Bahari', sector:'Perikanan/Kelautan', region:'Barat', salary:'Rp 4 - 6 jt', type:'Full-time', desc:'Melaut bersama kru kapal purse seine. Berpengalaman di bidang perikanan laut.', skills:['Nelayan','Fisik Kuat'] },
  { id:9, title:'Admin Gudang', company:'PT Cold Storage Tarakan', sector:'Perikanan/Kelautan', region:'Barat', salary:'Rp 3.2 - 4 jt', type:'Full-time', desc:'Mengelola stok gudang dan administrasi. Menguasai Excel dan sistem inventori.', skills:['Admin','Excel','Inventori'] },
  { id:10, title:'Pengrajin Tas Rotan', company:'Kriya Paguntaka', sector:'UMKM/Kriya', region:'Tengah', salary:'Rp 2.5 - 3.5 jt', type:'Full-time', desc:'Membuat tas dan kerajinan dari rotan. Disediakan pelatihan bagi pemula.', skills:['Kriya','Kreativitas','Teliti'] },
];

const SECTORS = ['Semua Sektor','Perikanan/Kelautan','Jasa & Perdagangan','UMKM/Kriya','Pariwisata/Perhotelan','Pertambangan'];
const REGIONS = ['Semua Wilayah','Barat','Tengah','Timur','Utara'];

const COURSES = [
  { id:'c1', title:'Teknik Barista Dasar', duration:8, level:'Dasar', badge:'Lencana Dasar Barista', icon:'☕', desc:'Pelajari dasar-dasar meracik kopi, mulai dari espresso hingga latte art sederhana.',
    questions:[
      { q:'Suhu air ideal untuk menyeduh kopi adalah?', options:['60-70°C','90-96°C','100°C','120°C'], answer:1 },
      { q:'Apa itu espresso?', options:['Kopi instan','Kopi yang diekstrak dengan tekanan tinggi','Kopi susu','Kopi tanpa kafein'], answer:1 },
      { q:'Berapa gram kopi ideal untuk satu shot espresso?', options:['3-4 gram','7-9 gram','15-20 gram','25 gram'], answer:1 }
    ]},
  { id:'c2', title:'Higienitas Pabrik Ikan', duration:10, level:'Dasar', badge:'Lencana Higienitas Pangan', icon:'🐟', desc:'Standar kebersihan dan keamanan pangan untuk pengolahan hasil laut.',
    questions:[
      { q:'Suhu freezer ideal untuk menyimpan ikan adalah?', options:['-5°C','-10°C','-18°C atau lebih rendah','0°C'], answer:2 },
      { q:'Apa itu HACCP?', options:['Nama merek ikan','Sistem manajemen keamanan pangan','Alat pendingin','Jenis kemasan'], answer:1 },
      { q:'Sebelum mengolah ikan, tangan harus dicuci dengan?', options:['Air biasa','Sabun dan air bersih','Minyak','Alkohol 100%'], answer:1 }
    ]},
  { id:'c3', title:'Admin Media Sosial', duration:6, level:'Dasar', badge:'Lencana Admin Medsos', icon:'📱', desc:'Kelola konten media sosial untuk bisnis atau UMKM secara profesional.',
    questions:[
      { q:'Rasio gambar ideal untuk Instagram post adalah?', options:['16:9','1:1','4:3','9:16'], answer:1 },
      { q:'Apa itu engagement rate?', options:['Jumlah followers','Tingkat interaksi audiens dengan konten','Jumlah postingan','Kecepatan upload'], answer:1 },
      { q:'Platform mana yang paling cocok untuk konten video pendek?', options:['LinkedIn','TikTok','Blog','Email'], answer:1 }
    ]}
];

const WEBINARS = [
  { id:'w1', title:'Sukses Berkarir di Sektor Perikanan', speaker:'Bpk. Andi Wijaya (PT Bahari Nusantara)', date:'15 Des 2024', time:'14:00 WITA' },
  { id:'w2', title:'Membangun UMKM Kuliner dari Nol', speaker:'Ibu Siti Rahma (UMKM Sinar Laut)', date:'18 Des 2024', time:'10:00 WITA' },
  { id:'w3', title:'Trik Lolos Interview Kerja', speaker:'HRD Tarakan Explore', date:'22 Des 2024', time:'13:00 WITA' }
];

const COMPANIES_KYC = [
  { name:'PT Bahari Nusantara', type:'Perikanan', npwp:'12.345.678.9-901.000', status:'pending' },
  { name:'Kopi Paguntaka', type:'Jasa & Perdagangan', npwp:'98.765.432.1-234.000', status:'verified' },
  { name:'UMKM Sinar Laut', type:'UMKM/Kriya', npwp:'11.222.333.4-555.000', status:'pending' },
  { name:'Wisata Mangrove Tarakan', type:'Pariwisata', npwp:'55.666.777.8-999.000', status:'verified' },
  { name:'PT Tambang Tarakan', type:'Pertambangan', npwp:'77.888.999.0-111.000', status:'pending' }
];

// ============ STATE ============
const State = {
  user: null,
  applications: [],
  badges: [],
  portfolio: [],
  posts: [],
  notifications: [],
  customJobs: [],
  companies: [],
  completedCourses: [],
  verifiedEmployees: [],

  load() {
    try {
      this.user = JSON.parse(localStorage.getItem('tl_user') || 'null');
      this.applications = JSON.parse(localStorage.getItem('tl_apps') || '[]');
      this.badges = JSON.parse(localStorage.getItem('tl_badges') || '[]');
      this.portfolio = JSON.parse(localStorage.getItem('tl_portfolio') || '[]');
      this.posts = JSON.parse(localStorage.getItem('tl_posts') || '[]');
      this.notifications = JSON.parse(localStorage.getItem('tl_notifs') || '[]');
      this.customJobs = JSON.parse(localStorage.getItem('tl_jobs') || '[]');
      this.companies = JSON.parse(localStorage.getItem('tl_companies') || 'null') || COMPANIES_KYC.map(c=>({...c}));
      this.completedCourses = JSON.parse(localStorage.getItem('tl_completed') || '[]');
      this.verifiedEmployees = JSON.parse(localStorage.getItem('tl_verified') || '[]');
    } catch(e) { console.warn('Load error', e); }
  },
  save() {
    localStorage.setItem('tl_user', JSON.stringify(this.user));
    localStorage.setItem('tl_apps', JSON.stringify(this.applications));
    localStorage.setItem('tl_badges', JSON.stringify(this.badges));
    localStorage.setItem('tl_portfolio', JSON.stringify(this.portfolio));
    localStorage.setItem('tl_posts', JSON.stringify(this.posts));
    localStorage.setItem('tl_notifs', JSON.stringify(this.notifications));
    localStorage.setItem('tl_jobs', JSON.stringify(this.customJobs));
    localStorage.setItem('tl_companies', JSON.stringify(this.companies));
    localStorage.setItem('tl_completed', JSON.stringify(this.completedCourses));
    localStorage.setItem('tl_verified', JSON.stringify(this.verifiedEmployees));
  },
  allJobs() { return [...DUMMY_JOBS, ...this.customJobs]; }
};

State.load();

// ============ UTILS ============
function showToast(msg, type='') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => { t.className = 'toast ' + type; }, 3000);
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) { page.classList.add('active'); window.scrollTo(0,0); }
  // hide navbar on dashboard, show on landing
  document.getElementById('navbar').style.display = (name === 'landing') ? '' : 'none';
}

// ============ NAV ============
document.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  else nav.style.boxShadow = 'none';
});

// ============ LOGIN ============
let selectedRole = null;

function openLogin(role) {
  document.getElementById('loginModal').classList.add('active');
  document.getElementById('roleGrid').style.display = '';
  document.getElementById('loginForm').style.display = 'none';
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('active'));
  if (role) selectRole(role);
}
function closeLogin() { document.getElementById('loginModal').classList.remove('active'); }
function backToRoles() {
  document.getElementById('roleGrid').style.display = '';
  document.getElementById('loginForm').style.display = 'none';
  selectedRole = null;
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('active'));
}
function selectRole(role) {
  selectedRole = role;
  document.querySelectorAll('.role-card').forEach(c => c.classList.toggle('active', c.dataset.role === role));
  document.getElementById('roleGrid').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
  const label = document.getElementById('loginLabel');
  label.textContent = role === 'perusahaan' ? 'Nama Perusahaan / UMKM' : role === 'admin' ? 'Nama Admin' : 'Nama Lengkap';
  document.getElementById('loginName').value = '';
  document.getElementById('loginName').focus();
}
function doLogin() {
  const name = document.getElementById('loginName').value.trim();
  if (!name) { showToast('Nama wajib diisi!', 'error'); return; }
  const email = document.getElementById('loginEmail')?.value || '';
  State.user = { name, role: selectedRole, email, joined: new Date().toISOString() };
  State.save();
  closeLogin();
  enterDashboard();
  showToast(`Selamat datang, ${name}!`, 'success');
}
function quickDemo() {
  const names = { yuwana:'Budi Santoso', perusahaan:'PT Bahari Nusantara', admin:'Admin Pemkot Tarakan' };
  State.user = { name: names[selectedRole], role: selectedRole, email: 'demo@tengkayu-link.id', joined: new Date().toISOString() };
  State.save();
  closeLogin();
  enterDashboard();
  showToast(`Mode Demo: ${State.user.name}`, 'yellow');
}
function enterDashboard() {
  if (!State.user) return;
  if (State.user.role === 'yuwana') {
    document.getElementById('yuwanaName').textContent = State.user.name;
    document.getElementById('yuwanaAvatar').textContent = State.user.name.charAt(0).toUpperCase();
    showPage('yuwana');
    showYuwanaTab('overview');
  } else if (State.user.role === 'perusahaan') {
    document.getElementById('perusahaanName').textContent = State.user.name;
    document.getElementById('perusahaanAvatar').textContent = State.user.name.charAt(0).toUpperCase();
    showPage('perusahaan');
    showPerusahaanTab('overview');
  } else if (State.user.role === 'admin') {
    document.getElementById('adminName').textContent = State.user.name;
    document.getElementById('adminAvatar').textContent = State.user.name.charAt(0).toUpperCase();
    showPage('admin');
    showAdminTab('overview');
  }
  updateNotifDot();
}
function doLogout() {
  if (!confirm('Keluar dari akun?')) return;
  State.user = null;
  State.save();
  document.getElementById('navbar').style.display = '';
  showPage('landing');
  showToast('Anda telah keluar.', 'yellow');
}

// ============ YUWANA DASHBOARD ============
function showYuwanaTab(tab) {
  document.querySelectorAll('#page-yuwana .nav-item').forEach(n => n.classList.toggle('active', n.dataset.tab === tab));
  document.querySelectorAll('#page-yuwana .tab-content').forEach(t => t.classList.remove('active'));
  const el = document.getElementById('yuwana-' + tab);
  if (el) el.classList.add('active');
  const titles = { overview:'Overview', dermaga:'Dermaga Karir', mahir:'Layar Mahir', usaha:'Jaring Usaha', paspor:'Paspor Karya' };
  document.getElementById('yuwanaTabTitle').textContent = titles[tab];
  if (tab === 'overview') renderYuwanaOverview();
  if (tab === 'dermaga') renderDermaga();
  if (tab === 'mahir') renderMahir();
  if (tab === 'usaha') renderUsaha();
  if (tab === 'paspor') renderPaspor();
}

function renderYuwanaOverview() {
  const badges = State.badges.length;
  const apps = State.applications.length;
  const courses = State.completedCourses.length;
  const jobs = State.allJobs().slice(0, 3);
  const recs = COURSES.filter(c => !State.completedCourses.includes(c.id)).slice(0, 2);

  document.getElementById('yuwana-overview').innerHTML = `
    <div class="passport-header" style="background:linear-gradient(135deg,#2563eb,#1e40af);">
      <div class="avatar">${escapeHtml(State.user.name.charAt(0).toUpperCase())}</div>
      <div>
        <h2>Halo, ${escapeHtml(State.user.name.split(' ')[0])}! 👋</h2>
        <p>Selamat datang kembali di TENGKAYU-LINK. Mari bangun masa depanmu!</p>
      </div>
    </div>
    <div class="grid-4">
      <div class="stat-card"><div class="stat-icon">🏅</div><div><strong>${badges}</strong><span>Lencana Diperoleh</span></div></div>
      <div class="stat-card"><div class="stat-icon">📥</div><div><strong>${apps}</strong><span>Lamaran Terkirim</span></div></div>
      <div class="stat-card"><div class="stat-icon">🎓</div><div><strong>${courses}</strong><span>Kelas Selesai</span></div></div>
      <div class="stat-card"><div class="stat-icon">🔔</div><div><strong>${State.notifications.length}</strong><span>Notifikasi Radar</span></div></div>
    </div>

    <h3 class="section-title">💼 Rekomendasi Lowongan</h3>
    <div class="card-grid">${jobs.map(jobCardHTML).join('')}</div>

    <h3 class="section-title">🎓 Rekomendasi Kelas</h3>
    <div class="card-grid">${recs.map(courseCardHTML).join('') || '<p style="color:var(--gray-500)">Semua kelas sudah diselesaikan! 🎉</p>'}</div>

    ${State.applications.length ? `
      <h3 class="section-title">📋 Status Lamaran Terakhir</h3>
      <div class="card">
        ${State.applications.slice(-5).reverse().map(a => {
          const job = State.allJobs().find(j => j.id === a.jobId);
          return `<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gray-100);">
            <div><strong>${escapeHtml(job?.title || 'Lowongan')}</strong><br><small style="color:var(--gray-500)">${escapeHtml(job?.company || '')}</small></div>
            <span class="job-tag green">${a.status}</span>
          </div>`;
        }).join('')}
      </div>
    ` : ''}
  `;
}

// ============ DERMAGA KARIR ============
let filterSector = 'Semua Sektor';
let filterRegion = 'Semua Wilayah';

function renderDermaga() {
  document.getElementById('yuwana-dermaga').innerHTML = `
    <div class="map-container">
      <svg viewBox="0 0 500 260" class="map-svg">
        <defs>
          <linearGradient id="waterGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#dbeafe"/><stop offset="100%" stop-color="#bfdbfe"/>
          </linearGradient>
        </defs>
        <rect width="500" height="260" fill="url(#waterGrad)" rx="16"/>
        <path d="M50,110 Q80,70 150,80 L200,60 Q250,55 300,65 L380,70 Q430,80 450,120 Q460,150 430,180 Q380,200 320,195 L240,205 Q180,210 130,195 Q80,185 55,160 Q40,135 50,110 Z" fill="#bbf7d0" stroke="#10b981" stroke-width="2.5"/>
        <g class="map-zone" onclick="selectRegion('Utara')" style="cursor:pointer">
          <ellipse cx="250" cy="100" rx="75" ry="35" fill="#60a5fa" opacity="0.85"/>
          <text x="250" y="105" text-anchor="middle" fill="white" font-size="13" font-weight="700">UTARA</text>
        </g>
        <g class="map-zone" onclick="selectRegion('Barat')" style="cursor:pointer">
          <ellipse cx="130" cy="150" rx="58" ry="38" fill="#3b82f6" opacity="0.85"/>
          <text x="130" y="155" text-anchor="middle" fill="white" font-size="13" font-weight="700">BARAT</text>
        </g>
        <g class="map-zone" onclick="selectRegion('Tengah')" style="cursor:pointer">
          <ellipse cx="250" cy="160" rx="58" ry="38" fill="#fbbf24" opacity="0.95"/>
          <text x="250" y="165" text-anchor="middle" fill="#1e3a8a" font-size="13" font-weight="700">TENGAH</text>
        </g>
        <g class="map-zone" onclick="selectRegion('Timur')" style="cursor:pointer">
          <ellipse cx="370" cy="150" rx="58" ry="38" fill="#3b82f6" opacity="0.85"/>
          <text x="370" y="155" text-anchor="middle" fill="white" font-size="13" font-weight="700">TIMUR</text>
        </g>
      </svg>
      <div class="map-legend">
        <span><span class="dot" style="background:#3b82f6"></span>Wilayah</span>
        <span><span class="dot" style="background:#fbbf24"></span>Pusat Kota</span>
        <span><span class="dot" style="background:#60a5fa"></span>Klik area untuk filter</span>
      </div>
    </div>

    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px;">
      <select id="sectorFilter" onchange="filterSector=this.value;renderJobList()" style="padding:10px 16px;border-radius:8px;border:1.5px solid var(--gray-300);font-family:inherit;font-size:14px;">
        ${SECTORS.map(s => `<option ${s===filterSector?'selected':''}>${s}</option>`).join('')}
      </select>
      <select id="regionFilter" onchange="filterRegion=this.value;renderJobList()" style="padding:10px 16px;border-radius:8px;border:1.5px solid var(--gray-300);font-family:inherit;font-size:14px;">
        ${REGIONS.map(r => `<option ${r===filterRegion?'selected':''}>${r}</option>`).join('')}
      </select>
      <button class="btn btn-ghost" onclick="filterSector='Semua Sektor';filterRegion='Semua Wilayah';renderDermaga()">🔄 Reset Filter</button>
    </div>

    <h3 class="section-title">Daftar Lowongan (<span id="jobCount">0</span>)</h3>
    <div class="card-grid" id="jobList"></div>
  `;
  renderJobList();
}
function selectRegion(region) {
  filterRegion = region;
  renderDermaga();
  showToast(`Filter wilayah: ${region}`, 'yellow');
}
function renderJobList() {
  const jobs = State.allJobs().filter(j =>
    (filterSector === 'Semua Sektor' || j.sector === filterSector) &&
    (filterRegion === 'Semua Wilayah' || j.region === filterRegion)
  );
  const container = document.getElementById('jobList');
  const count = document.getElementById('jobCount');
  if (count) count.textContent = jobs.length;
  if (!container) return;
  if (!jobs.length) { container.innerHTML = '<p style="color:var(--gray-500);padding:20px;">Tidak ada lowongan sesuai filter. Coba ubah filter.</p>'; return; }
  container.innerHTML = jobs.map(jobCardHTML).join('');
}
function jobCardHTML(job) {
  const applied = State.applications.some(a => a.jobId === job.id);
  return `<div class="job-card" onclick="openJob(${job.id})">
    <h4>${escapeHtml(job.title)}</h4>
    <div class="company">🏢 ${escapeHtml(job.company)}</div>
    <div class="job-tags">
      <span class="job-tag">${escapeHtml(job.sector)}</span>
      <span class="job-tag yellow">📍 ${escapeHtml(job.region)}</span>
      <span class="job-tag green">${escapeHtml(job.type)}</span>
    </div>
    <div class="job-footer">
      <span class="salary">💰 ${escapeHtml(job.salary)}</span>
      <span style="font-size:12px;color:${applied?'#059669':'var(--gray-500)'};font-weight:600;">${applied ? '✅ Dilamar' : 'Lihat →'}</span>
    </div>
  </div>`;
}
function openJob(id) {
  const job = State.allJobs().find(j => j.id === id);
  if (!job) return;
  const applied = State.applications.some(a => a.jobId === id);
  document.getElementById('jobContent').innerHTML = `
    <span class="job-tag" style="margin-bottom:12px;">${escapeHtml(job.sector)}</span>
    <h2 style="color:var(--blue-900);margin-bottom:8px;">${escapeHtml(job.title)}</h2>
    <p style="color:var(--gray-600);margin-bottom:16px;">🏢 ${escapeHtml(job.company)} • 📍 Tarakan ${escapeHtml(job.region)}</p>
    <div class="job-tags" style="margin-bottom:20px;">
      <span class="job-tag yellow">💰 ${escapeHtml(job.salary)}</span>
      <span class="job-tag green">${escapeHtml(job.type)}</span>
    </div>
    <h4 style="margin-bottom:8px;">Deskripsi</h4>
    <p style="color:var(--gray-700);margin-bottom:16px;">${escapeHtml(job.desc)}</p>
    <h4 style="margin-bottom:8px;">Skill Dibutuhkan</h4>
    <div class="job-tags" style="margin-bottom:24px;">${job.skills.map(s=>`<span class="job-tag">${escapeHtml(s)}</span>`).join('')}</div>
    <div style="background:#f0fdf4;padding:12px 16px;border-radius:8px;font-size:13px;color:#065f46;margin-bottom:20px;">
      🔒 Profil digital Anda akan dikirim <strong>End-to-End Encrypted</strong> ke HRD perusahaan.
    </div>
    ${applied
      ? `<button class="btn btn-ghost btn-block" disabled style="opacity:0.6;">✅ Lamaran Terkirim</button>`
      : `<button class="btn btn-primary btn-block" onclick="applyJob(${id})">⚡ Lamar 1-Click</button>`}
  `;
  document.getElementById('jobModal').classList.add('active');
}
function closeJob() { document.getElementById('jobModal').classList.remove('active'); }
function applyJob(id) {
  const job = State.allJobs().find(j => j.id === id);
  if (!job) return;
  if (State.applications.some(a => a.jobId === id)) { showToast('Sudah dilamar!', 'yellow'); return; }
  State.applications.push({
    jobId: id, title: job.title, company: job.company,
    appliedAt: new Date().toISOString(), status: 'Terkirim'
  });
  // Add notification
  State.notifications.unshift({ title:'Lamaran Terkirim', text:`Lamaran untuk "${job.title}" telah dikirim ke ${job.company}.`, time: new Date().toLocaleString('id-ID') });
  State.save();
  updateNotifDot();
  closeJob();
  showToast('Lamaran berhasil dikirim! ✅', 'success');
  if (document.getElementById('yuwana-dermaga').classList.contains('active')) renderDermaga();
}

// ============ NOTIFICATIONS ============
function toggleNotifications() {
  const panel = document.getElementById('notifPanel');
  if (panel.classList.contains('show')) { panel.classList.remove('show'); return; }
  const notifs = State.notifications.length ? State.notifications : [{ title:'Selamat Datang', text:'Belum ada notifikasi. Lengkapi profil dan ambil kelas untuk mendapatkan rekomendasi lowongan.', time:'—' }];
  panel.innerHTML = `<div style="padding:14px 16px;border-bottom:1px solid var(--gray-200);font-weight:700;color:var(--blue-900);">🔔 Radar Karir</div>` +
    notifs.slice(0, 15).map(n => `<div class="notif-item"><strong>${escapeHtml(n.title)}</strong>${escapeHtml(n.text)}<br><small>${escapeHtml(n.time)}</small></div>`).join('');
  panel.classList.add('show');
}
function updateNotifDot() {
  const dot = document.getElementById('notifDot');
  if (dot) dot.classList.toggle('show', State.notifications.length > 0);
}
function addNotification(title, text) {
  State.notifications.unshift({ title, text, time: new Date().toLocaleString('id-ID') });
  State.save(); updateNotifDot();
}

// ============ LAYAR MAHIR ============
function renderMahir() {
  const completed = State.completedCourses;
  document.getElementById('yuwana-mahir').innerHTML = `
    <h3 class="section-title">📹 Galeri Micro-Learning</h3>
    <div class="card-grid">
      ${COURSES.map(c => {
        const done = completed.includes(c.id);
        return `<div class="course-card" onclick="openCourse('${c.id}')">
          <div class="course-thumb">${c.icon}</div>
          <div class="course-info">
            <h4>${escapeHtml(c.title)}</h4>
            <small>⏱️ ${c.duration} menit • ${escapeHtml(c.level)}</small>
            ${done ? `<div class="course-progress"><div style="width:100%"></div></div><small style="color:#059669;font-weight:600;">✅ Selesai — ${escapeHtml(c.badge)}</small>` : ''}
          </div>
        </div>`;
      }).join('')}
    </div>

    <h3 class="section-title" style="margin-top:32px;">🎥 Webinar TENGKAYU-LINK</h3>
    <div class="card-grid">
      ${WEBINARS.map(w => `<div class="card">
        <span class="job-tag yellow">📅 ${escapeHtml(w.date)} • ${escapeHtml(w.time)}</span>
        <h4 style="margin:12px 0 8px;color:var(--blue-900);">${escapeHtml(w.title)}</h4>
        <p style="font-size:13px;color:var(--gray-600);margin-bottom:12px;">🎤 ${escapeHtml(w.speaker)}</p>
        <button class="btn btn-primary btn-sm" onclick="showToast('Pendaftaran webinar berhasil! Cek email Anda.','success')">Daftar Webinar</button>
      </div>`).join('')}
    </div>

    ${State.badges.length ? `
      <h3 class="section-title" style="margin-top:32px;">🏅 Lencana Anda (${State.badges.length})</h3>
      <div style="display:flex;gap:16px;flex-wrap:wrap;">
        ${State.badges.map(b => `<div style="text-align:center;">
          <div class="badge-display small">${b.icon || '🏅'}</div>
          <small style="font-weight:600;color:var(--blue-900);">${escapeHtml(b.name)}</small>
        </div>`).join('')}
      </div>
    ` : ''}
  `;
}
function courseCardHTML(c) {
  const done = State.completedCourses.includes(c.id);
  return `<div class="course-card" onclick="openCourse('${c.id}')">
    <div class="course-thumb">${c.icon}</div>
    <div class="course-info">
      <h4>${escapeHtml(c.title)}</h4>
      <small>⏱️ ${c.duration} menit • ${escapeHtml(c.level)}</small>
      ${done ? '<small style="color:#059669;font-weight:600;">✅ Selesai</small>' : ''}
    </div>
  </div>`;
}

let currentCourse = null;
let quizState = null;
let videoInterval = null;

function openCourse(id) {
  currentCourse = COURSES.find(c => c.id === id);
  if (!currentCourse) return;
  const done = State.completedCourses.includes(id);
  quizState = null;
  if (videoInterval) { clearInterval(videoInterval); videoInterval = null; }

  document.getElementById('courseContent').innerHTML = `
    <h2 style="color:var(--blue-900);margin-bottom:8px;">${currentCourse.icon} ${escapeHtml(currentCourse.title)}</h2>
    <p style="color:var(--gray-600);margin-bottom:16px;">${escapeHtml(currentCourse.desc)}</p>
    <div class="video-player" id="videoPlayer">
      <div class="video-play" id="videoPlay" onclick="playVideo()">
        <div class="video-play-btn">▶</div>
      </div>
      <div class="video-timer" id="videoTimer">00:00 / 0${currentCourse.duration}:00</div>
      <div class="video-bar"><div id="videoProgress"></div></div>
    </div>
    <div id="quizArea"></div>
    ${done
      ? `<div style="background:#f0fdf4;padding:12px 16px;border-radius:8px;color:#065f46;margin-top:16px;font-weight:600;">✅ Anda sudah menyelesaikan kelas ini dan memiliki ${escapeHtml(currentCourse.badge)}.</div>`
      : `<button class="btn btn-primary btn-block" id="quizBtn" style="margin-top:16px;display:none;" onclick="startQuiz()">📝 Mulai Kuis</button>`}
  `;
  document.getElementById('courseModal').classList.add('active');
}
function closeCourse() {
  document.getElementById('courseModal').classList.remove('active');
  if (videoInterval) { clearInterval(videoInterval); videoInterval = null; }
}
function playVideo() {
  if (videoInterval) return;
  document.getElementById('videoPlay').style.display = 'none';
  let sec = 0;
  const dur = currentCourse.duration;
  videoInterval = setInterval(() => {
    sec++;
    const pct = Math.min(100, (sec / dur) * 100);
    document.getElementById('videoProgress').style.width = pct + '%';
    const m = String(Math.floor(sec / 60)).padStart(2,'0');
    const s = String(sec % 60).padStart(2,'0');
    document.getElementById('videoTimer').textContent = `0${m}:${s} / 0${dur}:00`;
    if (sec >= dur) {
      clearInterval(videoInterval); videoInterval = null;
      const btn = document.getElementById('quizBtn');
      if (btn) btn.style.display = 'block';
      showToast('Video selesai! Silakan ikuti kuis.', 'success');
    }
  }, 1000);
}
function startQuiz() {
  quizState = { idx: 0, correct: 0 };
  document.getElementById('quizBtn').style.display = 'none';
  renderQuiz();
}
function renderQuiz() {
  const area = document.getElementById('quizArea');
  if (!quizState || quizState.idx >= currentCourse.questions.length) {
    const total = currentCourse.questions.length;
    const passed = quizState.correct >= Math.ceil(total * 0.7);
    if (passed) {
      if (!State.completedCourses.includes(currentCourse.id)) {
        State.completedCourses.push(currentCourse.id);
        State.badges.push({ name: currentCourse.badge, icon: currentCourse.icon, date: new Date().toISOString() });
        addNotification('🏅 Lencana Baru!', `Selamat! Anda mendapatkan ${currentCourse.badge}.`);
        State.save();
      }
      showBadge();
    } else {
      area.innerHTML = `<div class="card" style="text-align:center;margin-top:16px;">
        <h3 style="color:#dc2626;">😔 Belum Lulus</h3>
        <p style="color:var(--gray-600);margin:8px 0 16px;">Skor Anda: ${quizState.correct}/${total}. Minimal 70% untuk lulus.</p>
        <button class="btn btn-primary" onclick="startQuiz()">🔄 Coba Lagi</button>
      </div>`;
    }
    return;
  }
  const q = currentCourse.questions[quizState.idx];
  area.innerHTML = `<div class="card" style="margin-top:16px;">
    <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--gray-500);margin-bottom:8px;">
      <span>Pertanyaan ${quizState.idx+1}/${currentCourse.questions.length}</span>
      <span>Benar: ${quizState.correct}</span>
    </div>
    <div class="quiz-question">
      <h4>${escapeHtml(q.q)}</h4>
      ${q.options.map((o,i) => `<button class="quiz-option" onclick="answerQuiz(${i})">${escapeHtml(o)}</button>`).join('')}
    </div>
  </div>`;
}
function answerQuiz(idx) {
  const q = currentCourse.questions[quizState.idx];
  const opts = document.querySelectorAll('#quizArea .quiz-option');
  opts.forEach((b,i) => { b.disabled = true; if (i === q.answer) b.classList.add('correct'); });
  if (idx === q.answer) { quizState.correct++; showToast('Benar! ✅', 'success'); }
  else { opts[idx].classList.add('wrong'); showToast('Salah ❌', 'error'); }
  quizState.idx++;
  setTimeout(renderQuiz, 900);
}
function showBadge() {
  document.getElementById('badgeContent').innerHTML = `
    <div class="badge-display">${currentCourse.icon}</div>
    <h2 style="color:var(--blue-900);margin-bottom:8px;">Selamat! 🎉</h2>
    <p style="color:var(--gray-600);margin-bottom:20px;">Anda mendapatkan</p>
    <h3 style="color:var(--yellow-600);font-size:22px;margin-bottom:8px;">${escapeHtml(currentCourse.badge)}</h3>
    <p style="color:var(--gray-500);font-size:13px;margin-bottom:24px;">Lencana ini otomatis tersimpan di Paspor Karya Anda dan dapat diverifikasi melalui QR Code.</p>
    <button class="btn btn-primary btn-block" onclick="closeBadge()">Lihat Lencana Saya</button>
  `;
  document.getElementById('badgeModal').classList.add('active');
  closeCourse();
}
function closeBadge() {
  document.getElementById('badgeModal').classList.remove('active');
  if (document.getElementById('yuwana-mahir').classList.contains('active')) renderMahir();
}

// ============ JARING USAHA ============
let legalitasState = null;
let permodalanState = null;

function renderUsaha() {
  const posts = State.posts;
  document.getElementById('yuwana-usaha').innerHTML = `
    <h3 class="section-title">📋 Klinik Legalitas Terpadu</h3>
    <div class="card-grid">
      <div class="card" style="cursor:pointer;" onclick="startLegalitas('nib')">
        <div style="font-size:40px;margin-bottom:8px;">📄</div>
        <h4 style="color:var(--blue-900);margin-bottom:4px;">Nomor Induk Berusaha (NIB)</h4>
        <p style="font-size:13px;color:var(--gray-600);">Wizard pendaftaran NIB via OSS</p>
      </div>
      <div class="card" style="cursor:pointer;" onclick="startLegalitas('halal')">
        <div style="font-size:40px;margin-bottom:8px;">☪️</div>
        <h4 style="color:var(--blue-900);margin-bottom:4px;">Sertifikat Halal</h4>
        <p style="font-size:13px;color:var(--gray-600);">Panduan pendaftaran sertifikasi halal</p>
      </div>
    </div>

    <div id="legalitasWizard" style="margin-top:20px;"></div>

    <h3 class="section-title" style="margin-top:32px;">🤝 Kolam Kemitraan</h3>
    <div class="card" style="margin-bottom:16px;">
      <textarea id="postInput" placeholder="Contoh: Dicari supplier kardus kemasan di area Tarakan Barat..." style="width:100%;min-height:80px;padding:12px;border:1.5px solid var(--gray-300);border-radius:8px;font-family:inherit;font-size:14px;margin-bottom:10px;"></textarea>
      <button class="btn btn-primary" onclick="createPost()">📤 Posting</button>
    </div>
    <div id="postList"></div>

    <h3 class="section-title" style="margin-top:32px;">💰 Radar Permodalan</h3>
    <div class="card">
      <h4 style="color:var(--blue-900);margin-bottom:12px;">Kuota Dana Tersedia</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
        <div style="background:var(--blue-50);padding:12px;border-radius:8px;">
          <strong style="color:var(--blue-700);font-size:20px;">Rp 2.5 M</strong>
          <small style="display:block;color:var(--gray-600);">KUR Mikro</small>
        </div>
        <div style="background:var(--yellow-100);padding:12px;border-radius:8px;">
          <strong style="color:var(--yellow-600);font-size:20px;">Rp 1.8 M</strong>
          <small style="display:block;color:var(--gray-600);">Hibah UMKM</small>
        </div>
      </div>
      <div class="form-group">
        <label>Upload Laporan Laba Rugi Sederhana (PDF)</label>
        <input type="file" id="permodalanFile" accept=".pdf,.jpg,.png">
      </div>
      <button class="btn btn-yellow btn-block" onclick="submitPermodalan()">📤 Ajukan ke Mitra Bank (BRI/BPD)</button>
      <div id="permodalanStatus" style="margin-top:12px;"></div>
    </div>
  `;
  renderPosts();
}
function startLegalitas(type) {
  legalitasState = { type, step: 0, data: {} };
  renderLegalitasWizard();
}
function renderLegalitasWizard() {
  const w = document.getElementById('legalitasWizard');
  if (!w || !legalitasState) return;
  const steps = legalitasState.type === 'nib'
    ? ['Data Usaha','Jenis Usaha','Upload Dokumen','Review']
    : ['Data Produk','Bahan Baku','Proses Produksi','Review'];
  const stepNames = steps;
  const step = legalitasState.step;
  let content = '';
  if (step === 0) content = `<div class="form-group"><label>Nama Usaha</label><input type="text" id="legal_nama" placeholder="Contoh: UMKM Sambal Bu Siti" value="${legalitasState.data.nama||''}"></div>
    <div class="form-group"><label>Alamat</label><input type="text" id="legal_alamat" placeholder="Alamat usaha" value="${legalitasState.data.alamat||''}"></div>`;
  else if (step === 1 && legalitasState.type === 'nib') content = `<div class="form-group"><label>Jenis Usaha</label>
    <select id="legal_jenis"><option>Perdagangan</option><option>Jasa</option><option>Produksi</option><option>Kuliner</option></select></div>`;
  else if (step === 1 && legalitasState.type === 'halal') content = `<div class="form-group"><label>Nama Produk</label><input type="text" id="legal_produk" placeholder="Contoh: Sambal Bandeng" value="${legalitasState.data.produk||''}"></div>
    <div class="form-group"><label>Bahan Baku Utama</label><textarea id="legal_bahan" placeholder="Contoh: Ikan bandeng, cabai, bawang, garam">${legalitasState.data.bahan||''}</textarea></div>`;
  else if (step === 2) content = `<div class="form-group"><label>Upload ${legalitasState.type==='nib'?'KTP/NPWP':'Foto Produk'}</label>
    <input type="file" accept=".jpg,.png,.pdf"></div>
    <div style="background:var(--blue-50);padding:12px;border-radius:8px;font-size:13px;color:var(--blue-700);">📌 Untuk demo, upload disimulasikan.</div>`;
  else content = `<div style="background:#f0fdf4;padding:16px;border-radius:8px;">
    <h4 style="color:#065f46;margin-bottom:8px;">✅ Ringkasan Pengajuan</h4>
    <p style="font-size:13px;color:var(--gray-700);">Jenis: <strong>${legalitasState.type.toUpperCase()}</strong></p>
    <p style="font-size:13px;color:var(--gray-700);">Status: <strong style="color:#059669;">Siap Dikirim</strong></p>
  </div>`;

  w.innerHTML = `<div class="card">
    <div style="display:flex;gap:4px;margin-bottom:16px;">
      ${stepNames.map((s,i) => `<div style="flex:1;height:6px;border-radius:3px;background:${i<=step?'var(--blue-500)':'var(--gray-200)'};"></div>`).join('')}
    </div>
    <h4 style="color:var(--blue-900);margin-bottom:4px;">Langkah ${step+1}/${stepNames.length}: ${stepNames[step]}</h4>
    <div style="margin-top:16px;">${content}</div>
    <div style="display:flex;gap:8px;margin-top:16px;">
      ${step>0?`<button class="btn btn-ghost" onclick="legalitasState.step--;renderLegalitasWizard()">← Kembali</button>`:''}
      ${step<stepNames.length-1
        ? `<button class="btn btn-primary" onclick="nextLegalitasStep()">Lanjut →</button>`
        : `<button class="btn btn-primary" onclick="finishLegalitas()">🚀 Kirim Pengajuan</button>`}
      <button class="btn btn-ghost" onclick="legalitasState=null;document.getElementById('legalitasWizard').innerHTML=''">Batal</button>
    </div>
  </div>`;
}
function nextLegalitasStep() {
  // capture data
  if (legalitasState.step === 0) {
    legalitasState.data.nama = document.getElementById('legal_nama')?.value || '';
    legalitasState.data.alamat = document.getElementById('legal_alamat')?.value || '';
  } else if (legalitasState.step === 1) {
    if (legalitasState.type === 'nib') legalitasState.data.jenis = document.getElementById('legal_jenis')?.value || '';
    else {
      legalitasState.data.produk = document.getElementById('legal_produk')?.value || '';
      legalitasState.data.bahan = document.getElementById('legal_bahan')?.value || '';
    }
  }
  legalitasState.step++;
  renderLegalitasWizard();
}
function finishLegalitas() {
  showToast(`Pengajuan ${legalitasState.type.toUpperCase()} berhasil dikirim! Menunggu verifikasi.`, 'success');
  legalitasState = null;
  document.getElementById('legalitasWizard').innerHTML = '';
}
function renderPosts() {
  const el = document.getElementById('postList');
  if (!el) return;
  if (!State.posts.length) { el.innerHTML = '<p style="color:var(--gray-500);padding:12px;">Belum ada postingan. Jadilah yang pertama!</p>'; return; }
  el.innerHTML = State.posts.map(p => `<div class="forum-post">
    <div class="post-header">
      <div class="avatar">${escapeHtml(p.author.charAt(0).toUpperCase())}</div>
      <div><strong>${escapeHtml(p.author)}</strong><small>${new Date(p.time).toLocaleString('id-ID')}</small></div>
    </div>
    <p>${escapeHtml(p.text)}</p>
    <div class="post-actions"><span>💬 ${p.replies || 0} balasan</span><span>❤️ ${p.likes || 0} suka</span></div>
  </div>`).join('');
}
function createPost() {
  const input = document.getElementById('postInput');
  const text = input.value.trim();
  if (!text) { showToast('Postingan kosong!', 'error'); return; }
  State.posts.unshift({ author: State.user.name, text, time: new Date().toISOString(), replies:0, likes:0 });
  State.save();
  input.value = '';
  renderPosts();
  showToast('Postingan berhasil dibuat!', 'success');
}
function submitPermodalan() {
  const file = document.getElementById('permodalanFile');
  if (!file.files.length) { showToast('Upload dokumen terlebih dahulu!', 'error'); return; }
  document.getElementById('permodalanStatus').innerHTML = `
    <div style="background:#fef3c7;padding:14px;border-radius:8px;margin-top:12px;">
      <strong style="color:var(--yellow-600);">📤 Pengajuan Terkirim</strong>
      <p style="font-size:13px;color:var(--gray-700);margin-top:4px;">Dokumen Anda sedang ditinjau oleh mitra bank. Status: <strong>Dalam Review</strong></p>
      <div style="height:6px;background:rgba(0,0,0,0.1);border-radius:3px;margin-top:8px;"><div style="height:100%;width:30%;background:var(--yellow-500);border-radius:3px;"></div></div>
    </div>`;
  showToast('Pengajuan permodalan terkirim ke bank!', 'success');
}

// ============ PASPOR KARYA ============
function renderPaspor() {
  const badges = State.badges;
  const qrData = encodeURIComponent(`${window.location.origin}/verify/${encodeURIComponent(State.user.name)}`);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}&color=1e3a8a&bgcolor=ffffff`;
  document.getElementById('yuwana-paspor').innerHTML = `
    <div class="passport-header">
      <div class="avatar">${escapeHtml(State.user.name.charAt(0).toUpperCase())}</div>
      <div>
        <h2>${escapeHtml(State.user.name)}</h2>
        <p>${badges.length} Lencana • ${State.applications.length} Lamaran • ${State.completedCourses.length} Kelas</p>
      </div>
      <div class="passport-qr">
        <img src="${qrUrl}" alt="QR Keahlian" onerror="this.style.display='none'">
        <small>SCAN UNTUK VERIFIKASI</small>
      </div>
    </div>

    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">
      <button class="btn btn-primary" onclick="previewCV()">📄 Preview & Unduh CV</button>
      <button class="btn btn-yellow" onclick="addPortfolio()">➕ Tambah Portofolio</button>
    </div>

    <h3 class="section-title">🏅 Lencana Keahlian</h3>
    ${badges.length ? `<div style="display:flex;gap:16px;flex-wrap:wrap;">
      ${badges.map(b => `<div style="text-align:center;">
        <div class="badge-display small">${b.icon || '🏅'}</div>
        <small style="font-weight:600;color:var(--blue-900);display:block;margin-top:4px;">${escapeHtml(b.name)}</small>
      </div>`).join('')}
    </div>` : '<p style="color:var(--gray-500);">Belum ada lencana. Selesaikan kelas di Layar Mahir!</p>'}

    <h3 class="section-title">🎨 Etalase Portofolio</h3>
    <div class="portfolio-grid" id="portfolioGrid">
      ${State.portfolio.length ? State.portfolio.map(p => `<div class="portfolio-item" title="${escapeHtml(p.title)}" onclick="showToast('${escapeHtml(p.title)}','yellow')">${p.icon||'🖼️'}</div>`).join('') : ''}
      <div class="portfolio-item" onclick="addPortfolio()" style="background:var(--gray-100);color:var(--gray-500);">➕</div>
    </div>

    ${State.verifiedEmployees.length ? `
      <h3 class="section-title">✅ Verifikasi Kinerja Perusahaan</h3>
      ${State.verifiedEmployees.map(v => `<div class="card" style="margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;">
          <div><strong>${escapeHtml(v.company)}</strong><br><small style="color:var(--gray-500);">${escapeHtml(v.comment || 'Kinerja baik')}</small></div>
          <span class="job-tag green">✅ Centang Biru</span>
        </div>
      </div>`).join('')}
    ` : ''}
  `;
}
function previewCV() {
  const user = State.user;
  const badges = State.badges;
  const apps = State.applications;
  document.getElementById('cvContent').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:16px;">
      <h2 style="color:var(--blue-900);">📄 Preview CV</h2>
      <button class="btn btn-primary btn-sm" onclick="downloadCV()">⬇️ Unduh PDF</button>
    </div>
    <div style="background:white;border:1px solid var(--gray-200);border-radius:8px;padding:32px;">
      <div style="border-bottom:3px solid var(--blue-600);padding-bottom:16px;margin-bottom:20px;">
        <h1 style="color:var(--blue-900);font-size:28px;">${escapeHtml(user.name)}</h1>
        <p style="color:var(--gray-600);margin-top:4px;">${escapeHtml(user.email || 'email@contoh.com')} • Tarakan, Kalimantan Utara</p>
      </div>
      <h3 style="color:var(--blue-700);margin-bottom:8px;">🎓 Ringkasan</h3>
      <p style="color:var(--gray-700);font-size:14px;margin-bottom:16px;">Pencari kerja aktif di TENGKAYU-LINK dengan ${badges.length} lencana keahlian terverifikasi dan ${apps.length} lamaran terkirim. Siap berkontribusi di sektor riil Tarakan.</p>
      <h3 style="color:var(--blue-700);margin-bottom:8px;">🏅 Lencana Keahlian</h3>
      <ul style="margin-left:20px;color:var(--gray-700);font-size:14px;margin-bottom:16px;">
        ${badges.length ? badges.map(b => `<li>${escapeHtml(b.name)}</li>`).join('') : '<li>Belum ada lencana</li>'}
      </ul>
      <h3 style="color:var(--blue-700);margin-bottom:8px;">📥 Pengalaman Melamar</h3>
      <ul style="margin-left:20px;color:var(--gray-700);font-size:14px;">
        ${apps.length ? apps.map(a => `<li>${escapeHtml(a.title)} — ${escapeHtml(a.company)}</li>`).join('') : '<li>Belum ada pengalaman melamar</li>'}
      </ul>
    </div>
  `;
  document.getElementById('cvModal').classList.add('active');
}
function closeCV() { document.getElementById('cvModal').classList.remove('active'); }
function downloadCV() {
  const user = State.user;
  const badges = State.badges;
  const apps = State.applications;
  const w = window.open('', '_blank');
  w.document.write(`<!DOCTYPE html><html><head><title>CV - ${user.name}</title>
  <style>body{font-family:Arial,sans-serif;padding:40px;max-width:800px;margin:0 auto;color:#111;}
  h1{color:#1e3a8a;border-bottom:3px solid #2563eb;padding-bottom:10px;}
  h3{color:#1d4ed8;margin-top:24px;}ul{margin-left:20px;}li{margin:6px 0;}
  .footer{margin-top:40px;font-size:12px;color:#666;text-align:center;}</style></head><body>
  <h1>${user.name}</h1>
  <p>${user.email || 'email@contoh.com'} • Tarakan, Kalimantan Utara</p>
  <h3>Ringkasan</h3><p>Pencari kerja aktif dengan ${badges.length} lencana keahlian terverifikasi.</p>
  <h3>Lencana Keahlian</h3><ul>${badges.map(b => `<li>${b.name}</li>`).join('') || '<li>-</li>'}</ul>
  <h3>Pengalaman Melamar</h3><ul>${apps.map(a => `<li>${a.title} — ${a.company}</li>`).join('') || '<li>-</li>'}</ul>
  <p class="footer">Dibuat dengan TENGKAYU-LINK — ${new Date().toLocaleDateString('id-ID')}</p>
  </body></html>`);
  w.document.close();
  setTimeout(() => w.print(), 500);
  showToast('CV siap diunduh sebagai PDF', 'success');
}
function addPortfolio() {
  const icons = ['🎨','📸','🎭','🖼️','📐','🎬'];
  const titles = ['Karya Seni','Foto Produk','Sertifikat','Desain Grafis','Sketsa','Video'];
  const idx = State.portfolio.length % icons.length;
  State.portfolio.push({ icon: icons[idx], title: titles[idx] });
  State.save();
  renderPaspor();
  showToast('Portofolio ditambahkan!', 'success');
}

// ============ PERUSAHAAN DASHBOARD ============
function showPerusahaanTab(tab) {
  document.querySelectorAll('#page-perusahaan .nav-item').forEach(n => n.classList.toggle('active', n.dataset.tab === tab));
  document.querySelectorAll('#page-perusahaan .tab-content').forEach(t => t.classList.remove('active'));
  const el = document.getElementById('perusahaan-' + tab);
  if (el) el.classList.add('active');
  const titles = { overview:'Overview', post:'Post Lowongan', lamaran:'Lamaran Masuk', verifikasi:'Verifikasi Kinerja' };
  document.getElementById('perusahaanTabTitle').textContent = titles[tab];
  if (tab === 'overview') renderPerusahaanOverview();
  if (tab === 'post') renderPostJob();
  if (tab === 'lamaran') renderLamaran();
  if (tab === 'verifikasi') renderVerifikasi();
}
function renderPerusahaanOverview() {
  const myJobs = State.customJobs;
  const apps = State.applications;
  document.getElementById('perusahaan-overview').innerHTML = `
    <div class="passport-header" style="background:linear-gradient(135deg,#d97706,#f59e0b);">
      <div class="avatar">${escapeHtml(State.user.name.charAt(0).toUpperCase())}</div>
      <div>
        <h2>${escapeHtml(State.user.name)}</h2>
        <p>✅ Tier KYC Terverifikasi</p>
      </div>
    </div>
    <div class="grid-4">
      <div class="stat-card"><div class="stat-icon">📝</div><div><strong>${myJobs.length}</strong><span>Lowongan Diposting</span></div></div>
      <div class="stat-card"><div class="stat-icon">📥</div><div><strong>${apps.length}</strong><span>Lamaran Masuk</span></div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div><strong>${State.verifiedEmployees.length}</strong><span>Verifikasi Diberikan</span></div></div>
      <div class="stat-card"><div class="stat-icon">⭐</div><div><strong>4.8</strong><span>Rating Perusahaan</span></div></div>
    </div>
    <h3 class="section-title">📋 Lowongan Aktif</h3>
    ${myJobs.length ? `<div class="card-grid">${myJobs.map(jobCardHTML).join('')}</div>` : '<p style="color:var(--gray-500);">Belum ada lowongan. Post lowongan pertama Anda!</p>'}
  `;
}
function renderPostJob() {
  document.getElementById('perusahaan-post').innerHTML = `
    <div class="card">
      <h3 style="color:var(--blue-900);margin-bottom:16px;">📝 Post Lowongan Baru</h3>
      <div class="form-group"><label>Judul Posisi</label><input type="text" id="pj_title" placeholder="Contoh: Operator Cold Storage"></div>
      <div class="form-group"><label>Sektor RPJMD</label>
        <select id="pj_sector">${SECTORS.slice(1).map(s => `<option>${s}</option>`).join('')}</select>
      </div>
      <div class="form-group"><label>Wilayah</label>
        <select id="pj_region">${REGIONS.slice(1).map(r => `<option>${r}</option>`).join('')}</select>
      </div>
      <div class="form-group"><label>Gaji</label><input type="text" id="pj_salary" placeholder="Contoh: Rp 3 - 4 jt"></div>
      <div class="form-group"><label>Tipe Kerja</label>
        <select id="pj_type"><option>Full-time</option><option>Part-time</option><option>Kontrak</option><option>Magang</option></select>
      </div>
      <div class="form-group"><label>Deskripsi</label><textarea id="pj_desc" placeholder="Jelaskan tanggung jawab dan kualifikasi" style="min-height:100px;"></textarea></div>
      <button class="btn btn-primary btn-block" onclick="postJob()">🚀 Posting Lowongan</button>
    </div>
  `;
}
function postJob() {
  const title = document.getElementById('pj_title').value.trim();
  const desc = document.getElementById('pj_desc').value.trim();
  if (!title || !desc) { showToast('Judul dan deskripsi wajib diisi!', 'error'); return; }
  const newJob = {
    id: Date.now(),
    title, company: State.user.name,
    sector: document.getElementById('pj_sector').value,
    region: document.getElementById('pj_region').value,
    salary: document.getElementById('pj_salary').value || 'Kompetitif',
    type: document.getElementById('pj_type').value,
    desc, skills:['Komunikasi','Disiplin']
  };
  State.customJobs.push(newJob);
  State.save();
  showToast('Lowongan berhasil diposting! ✅', 'success');
  showPerusahaanTab('overview');
}
function renderLamaran() {
  const apps = State.applications;
  document.getElementById('perusahaan-lamaran').innerHTML = `
    <h3 class="section-title">📥 Lamaran Masuk (${apps.length})</h3>
    ${apps.length ? `<div class="card-grid">${apps.map(a => `
      <div class="job-card">
        <h4>${escapeHtml(a.title)}</h4>
        <p style="font-size:13px;color:var(--gray-600);">Pelamar: <strong>${escapeHtml(State.user.name)}</strong></p>
        <div class="job-tags"><span class="job-tag">${new Date(a.appliedAt).toLocaleDateString('id-ID')}</span></div>
        <div style="margin-top:12px;display:flex;gap:6px;">
          <button class="btn btn-primary btn-sm" onclick="showToast('CV dibuka (simulasi dekripsi E2E)','success')">🔓 Buka CV</button>
          <button class="btn btn-ghost btn-sm" onclick="showToast('Status diubah ke Shortlist','success')">⭐ Shortlist</button>
        </div>
      </div>
    `).join('')}</div>` : '<p style="color:var(--gray-500);">Belum ada lamaran. Posting lowongan untuk mendapatkan pelamar.</p>'}
  `;
}
function renderVerifikasi() {
  document.getElementById('perusahaan-verifikasi').innerHTML = `
    <div class="card" style="margin-bottom:16px;">
      <h3 style="color:var(--blue-900);margin-bottom:12px;">✅ Beri Verifikasi Kinerja</h3>
      <p style="color:var(--gray-600);font-size:14px;margin-bottom:16px;">Berikan centang biru dan ulasan untuk mantan karyawan Anda. Verifikasi ini tidak dapat dihapus sepihak (ada audit log).</p>
      <div class="form-group"><label>Nama Kandidat</label><input type="text" id="verif_name" placeholder="Nama lengkap kandidat"></div>
      <div class="form-group"><label>Ulasan Kinerja</label><textarea id="verif_comment" placeholder="Contoh: Kinerja sangat baik, disiplin, dan cepat belajar." style="min-height:80px;"></textarea></div>
      <button class="btn btn-primary" onclick="submitVerifikasi()">✅ Kirim Verifikasi</button>
    </div>
    <h3 class="section-title">Riwayat Verifikasi (${State.verifiedEmployees.length})</h3>
    ${State.verifiedEmployees.length ? State.verifiedEmployees.map(v => `<div class="card" style="margin-bottom:8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div><strong>${escapeHtml(v.employee)}</strong><br><small style="color:var(--gray-500);">${escapeHtml(v.comment)}</small></div>
        <span class="job-tag green">✅ Centang Biru</span>
      </div>
    </div>`).join('') : '<p style="color:var(--gray-500);">Belum ada verifikasi.</p>'}
  `;
}
function submitVerifikasi() {
  const name = document.getElementById('verif_name').value.trim();
  const comment = document.getElementById('verif_comment').value.trim();
  if (!name) { showToast('Nama kandidat wajib diisi!', 'error'); return; }
  State.verifiedEmployees.push({ employee: name, company: State.user.name, comment: comment || 'Kinerja baik', time: new Date().toISOString() });
  State.save();
  showToast(`Verifikasi untuk ${name} berhasil dikirim!`, 'success');
  renderVerifikasi();
}

// ============ ADMIN DASHBOARD ============
function showAdminTab(tab) {
  document.querySelectorAll('#page-admin .nav-item').forEach(n => n.classList.toggle('active', n.dataset.tab === tab));
  document.querySelectorAll('#page-admin .tab-content').forEach(t => t.classList.remove('active'));
  const el = document.getElementById('admin-' + tab);
  if (el) el.classList.add('active');
  const titles = { overview:'Overview', bigdata:'Big Data Ketenagakerjaan', verifikasi:'Verifikasi Perusahaan' };
  document.getElementById('adminTabTitle').textContent = titles[tab];
  if (tab === 'overview') renderAdminOverview();
  if (tab === 'bigdata') renderBigData();
  if (tab === 'verifikasi') renderAdminVerifikasi();
}
function renderAdminOverview() {
  const totalJobs = State.allJobs().length;
  const totalApps = State.applications.length;
  const totalCompanies = State.companies.length;
  const verified = State.companies.filter(c => c.status === 'verified').length;
  document.getElementById('admin-overview').innerHTML = `
    <div class="passport-header" style="background:linear-gradient(135deg,#dc2626,#b91c1c);">
      <div class="avatar">${escapeHtml(State.user.name.charAt(0).toUpperCase())}</div>
      <div>
        <h2>${escapeHtml(State.user.name)}</h2>
        <p>Super Admin — Pemkot Tarakan</p>
      </div>
    </div>
    <div class="grid-4">
      <div class="stat-card"><div class="stat-icon">💼</div><div><strong>${totalJobs}</strong><span>Lowongan Aktif</span></div></div>
      <div class="stat-card"><div class="stat-icon">📥</div><div><strong>${totalApps}</strong><span>Lamaran Bulan Ini</span></div></div>
      <div class="stat-card"><div class="stat-icon">🏢</div><div><strong>${totalCompanies}</strong><span>Perusahaan Terdaftar</span></div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div><strong>${verified}</strong><span>Perusahaan Terverifikasi</span></div></div>
    </div>
    <h3 class="section-title">📊 Ringkasan Sektor</h3>
    <div class="card">
      ${SECTORS.slice(1).map(s => {
        const count = State.allJobs().filter(j => j.sector === s).length;
        const pct = totalJobs ? Math.round((count / totalJobs) * 100) : 0;
        return `<div style="margin-bottom:12px;">
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;"><strong>${s}</strong><span>${count} lowongan</span></div>
          <div style="height:8px;background:var(--gray-100);border-radius:4px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#2563eb,#f59e0b);border-radius:4px;"></div></div>
        </div>`;
      }).join('')}
    </div>
  `;
}
function renderBigData() {
  const sectorCounts = SECTORS.slice(1).map(s => ({ sector: s, count: State.allJobs().filter(j => j.sector === s).length }));
  const maxCount = Math.max(...sectorCounts.map(s => s.count), 1);
  document.getElementById('admin-bigdata').innerHTML = `
    <div class="grid-4">
      <div class="stat-card"><div class="stat-icon">👥</div><div><strong>512</strong><span>Yuwana Aktif</span></div></div>
      <div class="stat-card"><div class="stat-icon">💼</div><div><strong>${State.applications.length + 148}</strong><span>Serapan Tenaga Kerja</span></div></div>
      <div class="stat-card"><div class="stat-icon">🎓</div><div><strong>${State.badges.length + 234}</strong><span>Lencana Terbit</span></div></div>
      <div class="stat-card"><div class="stat-icon">🛍️</div><div><strong>${State.posts.length + 76}</strong><span>UMKM Aktif</span></div></div>
    </div>
    <h3 class="section-title">📈 Kebutuhan Tenaga Kerja per Sektor</h3>
    <div class="card">
      ${sectorCounts.map(s => `<div style="margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px;"><strong>${s.sector}</strong><span>${s.count} lowongan</span></div>
        <div style="height:12px;background:var(--gray-100);border-radius:6px;overflow:hidden;"><div style="height:100%;width:${(s.count/maxCount)*100}%;background:linear-gradient(90deg,#2563eb,#f59e0b);border-radius:6px;transition:width 0.5s;"></div></div>
      </div>`).join('')}
    </div>
    <h3 class="section-title">🗺️ Sebaran Wilayah</h3>
    <div class="card-grid">
      ${REGIONS.slice(1).map(r => {
        const count = State.allJobs().filter(j => j.region === r).length;
        return `<div class="stat-card"><div class="stat-icon">📍</div><div><strong>${count}</strong><span>Lowongan di Tarakan ${r}</span></div></div>`;
      }).join('')}
    </div>
    <button class="btn btn-primary" style="margin-top:20px;" onclick="showToast('Laporan berhasil diexport! (simulasi)','success')">📥 Export Laporan Bulanan</button>
  `;
}
function renderAdminVerifikasi() {
  document.getElementById('admin-verifikasi').innerHTML = `
    <h3 class="section-title">🏢 Verifikasi KYC Perusahaan</h3>
    ${State.companies.map((c, i) => `<div class="card" style="margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:start;gap:12px;flex-wrap:wrap;">
        <div style="flex:1;min-width:200px;">
          <h4 style="color:var(--blue-900);margin-bottom:4px;">${escapeHtml(c.name)}</h4>
          <p style="font-size:13px;color:var(--gray-600);">${escapeHtml(c.type)} • NPWP: ${escapeHtml(c.npwp)}</p>
        </div>
        <div style="display:flex;gap:6px;">
          ${c.status === 'verified'
            ? `<span class="job-tag green" style="align-self:center;">✅ Terverifikasi</span>`
            : `<button class="btn btn-primary btn-sm" onclick="verifyCompany(${i},'verified')">✅ Setujui</button>
               <button class="btn btn-ghost btn-sm" onclick="verifyCompany(${i},'rejected')" style="color:#dc2626;">❌ Tolak</button>`}
        </div>
      </div>
    </div>`).join('')}
  `;
}
function verifyCompany(idx, status) {
  State.companies[idx].status = status;
  State.save();
  showToast(`Perusahaan ${status === 'verified' ? 'disetujui' : 'ditolak'}!`, status === 'verified' ? 'success' : 'error');
  renderAdminVerifikasi();
}

// ============ AI CHATBOT ============
let aiOpen = false;
let interviewMode = { active:false, step:0 };
const INTERVIEW_QUESTIONS = [
  'Ceritakan tentang diri Anda dan mengapa Anda tertarik dengan posisi ini.',
  'Apa kelebihan dan kekurangan terbesar Anda?',
  'Bagaimana Anda menghadapi tekanan atau konflik di tempat kerja?',
  'Di mana Anda melihat diri Anda 5 tahun ke depan?'
];
const INTERVIEW_FEEDBACK = [
  'Jawaban yang baik! Anda sudah menonjolkan motivasi. Tambahkan pencapaian terukur agar lebih kuat. Skor: 78/100.',
  'Bagus! Anda jujur menyebut kekurangan. Sertakan bagaimana Anda mengatasinya. Skor: 82/100.',
  'Respons yang matang. Tunjukkan contoh konkret situasi yang pernah Anda hadapi. Skor: 75/100.',
  'Visi yang jelas! Kaitkan dengan kontribusi untuk perusahaan. Skor: 85/100.'
];

function toggleAIChat() {
  aiOpen = !aiOpen;
  document.getElementById('aiPanel').classList.toggle('show', aiOpen);
  if (aiOpen && !document.getElementById('aiMessages').children.length) {
    addAIMessage('ai', 'Halo! 👋 Saya Mercusuar AI, asisten pintar TENGKAYU-LINK.\n\nSaya bisa membantu Anda dengan:\n📄 Review CV\n🎤 Simulasi Interview\n📋 Info Legalitas UMKM (NIB/Halal)\n💼 Pencarian Lowongan\n\nApa yang bisa saya bantu hari ini?');
  }
}
function quickPrompt(text) {
  document.getElementById('aiInput').value = text;
  sendAIMessage();
}
function sendAIMessage() {
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if (!text) return;
  addAIMessage('user', text);
  input.value = '';
  setTimeout(() => {
    const reply = getAIReply(text);
    addAIMessage('ai', reply);
  }, 600);
}
function addAIMessage(role, text) {
  const box = document.getElementById('aiMessages');
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}
function getAIReply(msg) {
  const m = msg.toLowerCase();

  // Interview mode continuation
  if (interviewMode.active) {
    if (interviewMode.step < INTERVIEW_QUESTIONS.length) {
      const fb = INTERVIEW_FEEDBACK[interviewMode.step];
      interviewMode.step++;
      if (interviewMode.step < INTERVIEW_QUESTIONS.length) {
        return `${fb}\n\n❓ Pertanyaan ${interviewMode.step+1}: ${INTERVIEW_QUESTIONS[interviewMode.step]}`;
      } else {
        interviewMode.active = false;
        return `${fb}\n\n🎉 Simulasi interview selesai!\nRata-rata skor Anda: 80/100. Pertahankan!\n\nTips: Latih lagi dengan pertanyaan berbeda untuk hasil lebih baik.`;
      }
    }
  }

  if (m.includes('interview') || m.includes('wawancara')) {
    interviewMode = { active:true, step:0 };
    return `Baik, mari mulai simulasi interview! 🎤\nSaya akan berperan sebagai HRD.\n\n❓ Pertanyaan 1: ${INTERVIEW_QUESTIONS[0]}`;
  }
  if (m.includes('cv') || m.includes('resume')) {
    const badgeCount = State.badges?.length || 0;
    return `📄 Analisis CV Anda:\n\n✅ Kekuatan: Anda memiliki ${badgeCount} lencana keahlian terverifikasi.\n⚠️ Perbaikan: Tambahkan pencapaian terukur (mis. "meningkatkan penjualan 20%").\n💡 Saran: Sertakan portofolio proyek nyata di Paspor Karya.\n\nSkor CV: ${badgeCount > 0 ? '82' : '65'}/100. ${badgeCount === 0 ? 'Ambil kelas di Layar Mahir untuk tingkatkan skor!' : 'Terus tingkatkan!'}`;
  }
  if (m.includes('halal')) return '☪️ Syarat Sertifikat Halal untuk produk sambal bandeng:\n1. NIB (Nomor Induk Berusaha) via OSS\n2. Daftar produk & bahan baku\n3. Proses produksi bebas kontaminasi\n4. Sertifikat halal dari MUI/BPJPH\n5. Label halal pada kemasan\n\n⏱️ Estimasi: 21-30 hari kerja.\n💰 Biaya: UMKM mikro bisa GRATIS (program SEHATI).\n\nBuka menu "Jaring Usaha" → "Klinik Legalitas" untuk panduan step-by-step.';
  if (m.includes('nib')) return '📄 NIB (Nomor Induk Berusaha) dibuat GRATIS via OSS di oss.go.id.\n\nDokumen yang perlu:\n• NIK (KTP)\n• NPWP\n• Data usaha (nama, alamat, jenis)\n\n⏱️ Proses: 1-3 hari kerja.\n\nBuka "Jaring Usaha" → "Klinik Legalitas Terpadu" → pilih "NIB" untuk wizard interaktif.';
  if (m.includes('modal') || m.includes('kur') || m.includes('hibah')) return '💰 Radar Permodalan TENGKAYU-LINK:\n\n• KUR Mikro: hingga Rp 50 juta (bunga 6%/tahun)\n• KUR Kecil: Rp 50-500 juta\n• Hibah UMKM: Rp 5-25 juta (kompetitif)\n\nSyarat umum: NIB, laporan keuangan sederhana, usaha berjalan ≥6 bulan.\n\nBuka "Jaring Usaha" → "Radar Permodalan" untuk mengajukan ke mitra bank (BRI/BPD).';
  if (m.includes('kerja') || m.includes('loker') || m.includes('lowongan')) {
    const count = State.allJobs?.().length || 10;
    return `💼 Ada ${count} lowongan aktif di TENGKAYU-LINK.\n\nTips pencarian:\n1. Buka menu "Dermaga Karir"\n2. Filter sektor: Perikanan, Jasa, UMKM, Pariwisata, Pertambangan\n3. Klik peta untuk filter wilayah Tarakan\n4. Aktifkan Radar Karir 🔔 untuk notifikasi otomatis\n\nSektor apa yang Anda minati?`;
  }
  if (m.includes('halo') || m.includes('hai') || m.includes('hi')) return 'Halo! 👋 Ada yang bisa saya bantu? Saya bisa review CV, simulasi interview, info legalitas UMKM, atau bantu cari lowongan.';
  if (m.includes('terima kasih') || m.includes('thanks')) return 'Sama-sama! 😊 Semoga sukses karir dan usahanya. Ada lagi yang bisa saya bantu?';
  return 'Maaf, saya belum memahami pertanyaan itu. 🤔\n\nSaya bisa membantu dengan topik:\n📄 CV / Resume\n🎤 Simulasi Interview\n📋 Legalitas (NIB/Halal)\n💰 Permodalan (KUR/Hibah)\n💼 Lowongan Kerja\n\nCoba tanyakan salah satunya ya!';
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  updateNotifDot();
  // close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('active'); });
  });
  // close notif panel when clicking outside
  document.addEventListener('click', e => {
    const panel = document.getElementById('notifPanel');
    const bell = e.target.closest('.icon-btn');
    if (panel.classList.contains('show') && !e.target.closest('#notifPanel') && !bell) {
      panel.classList.remove('show');
    }
  });
  // Auto-login if session exists
  if (State.user) {
    enterDashboard();
  } else {
    showPage('landing');
  }
});

// Expose functions globally (they already are, but ensure)
window.showPage = showPage;
window.openLogin = openLogin;
// ... all functions are global by default in non-module scripts
