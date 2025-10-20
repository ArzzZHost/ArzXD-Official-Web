const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const overlayTitle = document.getElementById('overlayTitle');
const overlayDesc = document.getElementById('overlayDesc');
const overlayExtra = document.getElementById('overlayExtra');
const closeOverlay = document.getElementById('closeOverlay');

// Nomor WhatsApp tujuan (tanpa 0 di depan)
const NOMOR_WA = "628998052763";

function openOverlay(img, title, desc, extraHTML) {
  overlayImage.src = img;
  overlayTitle.textContent = title;
  overlayDesc.textContent = desc;
  overlayExtra.innerHTML = extraHTML;
  overlay.style.display = 'flex';
}

/* ========================
   PRODUK: PTERODACTYL
======================== */
document.getElementById('produk-ptero').addEventListener('click', () => {
  openOverlay(
    '../database/pterodactyl.png',
    'Pterodactyl Hosting Panel',
    'Panel hosting bot WhatsApp/Telegram cepat dan stabil.',
    `
      <h3>Pilih Paket Panel</h3>
      <form id="pteroForm" style="text-align:left; display:inline-block;">
        ${['1GB: 1K', '2GB: 1.5K', '3GB: 2K', '4GB: 2.5K', '5GB: 3K', '6GB: 3.5K', '7GB: 4K', '8GB: 4.5K', '9GB: 5K', '10GB: 5.5K', 'Unlimited: 6K']
          .map(p => `<label><input type="radio" name="paket" value="${p}"> ${p}</label><br>`).join('')}
        <button type="button" id="kirimWAPtero" class="buy-btn">Kirim ke WhatsApp</button>
      </form>
    `
  );

  setTimeout(() => {
    document.getElementById('kirimWAPtero').addEventListener('click', () => {
      const pilihan = document.querySelector('#pteroForm input[name="paket"]:checked');
      if (!pilihan) return alert('Pilih dulu paket panel yang kamu mau!');
      const pesan = encodeURIComponent(`Halo kak, saya ingin beli *${overlayTitle.textContent}* (${pilihan.value})`);
      window.open(`https://wa.me/${NOMOR_WA}?text=${pesan}`, '_blank');
    });
  }, 100);
});

/* ========================
   PRODUK: NOKOS
======================== */
document.getElementById('produk-nokos').addEventListener('click', () => {
  openOverlay(
    '../database/whatsapp.png',
    'Nokos - Nomor Kosong Murah',
    'Nomor kosong murah untuk keperluan verifikasi akun.',
    `
      <h3>Pilih Paket Nomor Kosong</h3>
      <form id="nokosForm" style="text-align:left; display:inline-block;">
        ${['Indonesia: 5K', 'Filipina: 6K', 'Malaysia: 7K', 'Thailand: 8K']
          .map(p => `<label><input type="radio" name="paket" value="${p}"> ${p}</label><br>`).join('')}
        <button type="button" id="kirimWANokos" class="buy-btn">Kirim ke WhatsApp</button>
      </form>
    `
  );

  setTimeout(() => {
    document.getElementById('kirimWANokos').addEventListener('click', () => {
      const pilihan = document.querySelector('#nokosForm input[name="paket"]:checked');
      if (!pilihan) return alert('Pilih dulu paket nomor kosongnya!');
      const pesan = encodeURIComponent(`Halo kak, saya ingin beli *${overlayTitle.textContent}* (${pilihan.value})`);
      window.open(`https://wa.me/${NOMOR_WA}?text=${pesan}`, '_blank');
    });
  }, 100);
});

/* ========================
   PRODUK: LOGO
======================== */
document.getElementById('produk-logo').addEventListener('click', () => {
  openOverlay(
    '../database/logo.png',
    'Logo Custom Ala ArzXD',
    'Dapatkan logo custom berkualitas tinggi untuk brand Anda.',
    `
      <h3>Pilih Jenis Logo</h3>
      <form id="logoForm" style="text-align:left; display:inline-block;">
        ${[
          {name: 'Logo Attacker', img: 'attacker.png', harga: '1K'},
          {name: 'Logo Dev', img: 'dev.png', harga: '1K'},
          {name: 'Logo Anime', img: 'logo.png', harga: '1K'}
        ].map(p => `
          <label style="display:flex;align-items:center;gap:8px;">
            <input type="radio" name="paket" value="${p.name}">
            <img src="../database/${p.img}" width="40" height="40" alt="${p.name}">
            ${p.name}: ${p.harga}
          </label><br>`).join('')}
        <button type="button" id="kirimWALogo" class="buy-btn">Kirim ke WhatsApp</button>
      </form>
    `
  );

  setTimeout(() => {
    document.getElementById('kirimWALogo').addEventListener('click', () => {
      const pilihan = document.querySelector('#logoForm input[name="paket"]:checked');
      if (!pilihan) return alert('Pilih dulu jenis logo yang kamu mau!');
      const pesan = encodeURIComponent(`Halo kak, saya ingin beli *${overlayTitle.textContent}* (${pilihan.value})`);
      window.open(`https://wa.me/${NOMOR_WA}?text=${pesan}`, '_blank');
    });
  }, 100);
});

/* ========================
   PRODUK: SCRIPT BOT
======================== */
document.getElementById('produk-script').addEventListener('click', () => {
  openOverlay(
    '../database/bot-photo.png',
    'Script Bot WhatsApp / Telegram',
    'Pilih script bot dengan fitur terbaik untukmu.',
    `
      <h3>Pilih Paket Script Bot</h3>
      <form id="scriptForm" style="text-align:left; display:inline-block;">
        ${[
          'Base-Bot: 5K',
          'XynBotz-[NoEnc]-UpSC: 20K',
          'XynBotz-[Enc]-NoUpSC: 10K',
          'Ress-XynBotz: 25K'
        ].map(p => `<label><input type="radio" name="paket" value="${p}"> ${p}</label><br>`).join('')}
        <button type="button" id="kirimWAScript" class="buy-btn">Kirim ke WhatsApp</button>
      </form>
    `
  );

  setTimeout(() => {
    document.getElementById('kirimWAScript').addEventListener('click', () => {
      const pilihan = document.querySelector('#scriptForm input[name="paket"]:checked');
      if (!pilihan) return alert('Pilih dulu paket script-nya!');
      const pesan = encodeURIComponent(`Halo kak, saya ingin beli *${overlayTitle.textContent}* (${pilihan.value})`);
      window.open(`https://wa.me/${NOMOR_WA}?text=${pesan}`, '_blank');
    });
  }, 100);
});

/* ========================
   CLOSE OVERLAY
======================== */
closeOverlay.addEventListener('click', () => overlay.style.display = 'none');
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.style.display = 'none'; });
