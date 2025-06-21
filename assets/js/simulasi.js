// Script simulasi kredit mobil

document.getElementById('startBtn').onclick = function() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('simulasiForm').style.display = 'block';
};

document.getElementById('kreditForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const kontrakNo = document.getElementById('kontrakNo').value;
  const clientName = document.getElementById('clientName').value;
  const otr = parseInt(document.getElementById('otr').value);
  const dpPersen = parseFloat(document.getElementById('dp').value);
  const jangkaWaktu = parseInt(document.getElementById('jangkaWaktu').value);
  const tanggalMulai = document.getElementById('tanggalMulai').value;

  // Hitung DP dan Pokok Utang
  const dp = otr * (dpPersen / 100);
  const pokokUtang = otr - dp;

  // Tentukan bunga bertingkat
  let bungaPersen = 0;
  if (jangkaWaktu <= 12) {
    bungaPersen = 12;
  } else if (jangkaWaktu <= 24) {
    bungaPersen = 14;
  } else {
    bungaPersen = 16.5;
  }

  // Hitung total bunga dan angsuran per bulan
  const totalBunga = pokokUtang * (bungaPersen / 100);
  const angsuranPerBulan = Math.round((pokokUtang + totalBunga) / jangkaWaktu);

  // Tampilkan hasil
  document.getElementById('hasil').style.display = 'block';
  document.getElementById('hasilKontrakNo').textContent = kontrakNo;
  document.getElementById('hasilClientName').textContent = clientName;
  document.getElementById('hasilOtr').textContent = 'Rp ' + otr.toLocaleString('id-ID');
  document.getElementById('pokokUtang').textContent = 'Rp ' + pokokUtang.toLocaleString('id-ID');
  document.getElementById('bungaPersen').textContent = bungaPersen + '%';
  document.getElementById('totalBunga').textContent = 'Rp ' + totalBunga.toLocaleString('id-ID');
  document.getElementById('angsuranPerBulan').textContent = 'Rp ' + angsuranPerBulan.toLocaleString('id-ID');

  // Generate jadwal angsuran
  const tbody = document.querySelector('#jadwal-table tbody');
  tbody.innerHTML = '';
  let tgl = new Date(tanggalMulai);
  for (let i = 1; i <= jangkaWaktu; i++) {
    // Format tanggal ke YYYY-MM-DD
    const yyyy = tgl.getFullYear();
    const mm = String(tgl.getMonth() + 1).padStart(2, '0');
    const dd = String(tgl.getDate()).padStart(2, '0');
    const tanggalJatuhTempo = `${yyyy}-${mm}-${dd}`;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${kontrakNo}</td>
      <td>${i}</td>
      <td>Rp ${angsuranPerBulan.toLocaleString('id-ID')}</td>
      <td>${tanggalJatuhTempo}</td>
    `;
    tbody.appendChild(tr);
    // Tambah 1 bulan
    tgl.setMonth(tgl.getMonth() + 1);
  }
}); 