import React, { useState } from 'react';
import FormSimulasi from './FormSimulasi';
import HasilSimulasi from './HasilSimulasi';
import JadwalAngsuran from './JadwalAngsuran';
import './App.css';

function hitungSimulasi(form) {
  const otr = parseInt(form.otr);
  const dpPersen = parseFloat(form.dp);
  const jangkaWaktu = parseInt(form.jangkaWaktu);
  const dp = otr * (dpPersen / 100);
  const pokokUtang = otr - dp;
  let bungaPersen = 0;
  if (jangkaWaktu <= 12) bungaPersen = 12;
  else if (jangkaWaktu <= 24) bungaPersen = 14;
  else bungaPersen = 16.5;
  const totalBunga = pokokUtang * (bungaPersen / 100);
  const angsuranPerBulan = Math.round((pokokUtang + totalBunga) / jangkaWaktu);
  return {
    kontrakNo: form.kontrakNo,
    clientName: form.clientName,
    otr,
    pokokUtang,
    bungaPersen,
    totalBunga,
    angsuranPerBulan,
    jangkaWaktu,
    tanggalMulai: form.tanggalMulai,
  };
}

function buatJadwal(hasil) {
  const jadwal = [];
  let tgl = new Date(hasil.tanggalMulai);
  for (let i = 1; i <= hasil.jangkaWaktu; i++) {
    const yyyy = tgl.getFullYear();
    const mm = String(tgl.getMonth() + 1).padStart(2, '0');
    const dd = String(tgl.getDate()).padStart(2, '0');
    jadwal.push({
      kontrakNo: hasil.kontrakNo,
      angsuranKe: i,
      angsuranPerBulan: hasil.angsuranPerBulan,
      tanggalJatuhTempo: `${yyyy}-${mm}-${dd}`,
    });
    tgl.setMonth(tgl.getMonth() + 1);
  }
  return jadwal;
}

function App() {
  const [hasil, setHasil] = useState(null);
  const [jadwal, setJadwal] = useState([]);

  const handleFormSubmit = (data) => {
    const hasilSimulasi = hitungSimulasi(data);
    setHasil(hasilSimulasi);
    setJadwal(buatJadwal(hasilSimulasi));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f4f6fb', padding: '32px 0' }}>
      <FormSimulasi onSubmit={handleFormSubmit} />
      <HasilSimulasi hasil={hasil} />
      <JadwalAngsuran jadwal={jadwal} />
    </div>
  );
}

export default App;
