import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Table, TableHead, TableRow, TableCell, TableBody, Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function JadwalAngsuran({ jadwal }) {
  const [open, setOpen] = useState(false);
  if (!jadwal || jadwal.length === 0) return null;

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Jadwal Angsuran', 14, 16);
    autoTable(doc, {
      head: [[
        'KONTRAK_NO',
        'ANGSURAN_KE',
        'ANGSURAN_PER_BULAN',
        'TANGGAL_JATUH_TEMPO',
      ]],
      body: jadwal.map(row => [
        row.kontrakNo,
        row.angsuranKe,
        row.angsuranPerBulan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
        row.tanggalJatuhTempo
      ]),
      startY: 24,
      styles: { font: 'helvetica', fontSize: 10 },
      headStyles: { fillColor: [45, 127, 249] },
    });
    doc.save('jadwal-angsuran.pdf');
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirmExport = () => {
    setOpen(false);
    handleExportPDF();
  };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardHeader title="Jadwal Angsuran" sx={{ color: '#2d7ff9', fontWeight: 600, pb: 0 }} />
      <CardContent sx={{ pt: 1, pb: 2 }}>
        <Box sx={{ mb: 2, textAlign: 'right' }}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Export PDF
          </Button>
        </Box>
        <Box sx={{ overflowX: 'auto' }}>
          <Table size="small" sx={{ minWidth: 420 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 500 }}>KONTRAK_NO</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>ANGSURAN_KE</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>ANGSURAN_PER_BULAN</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>TANGGAL_JATUH_TEMPO</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jadwal.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.kontrakNo}</TableCell>
                  <TableCell>{row.angsuranKe}</TableCell>
                  <TableCell>{row.angsuranPerBulan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
                  <TableCell>{row.tanggalJatuhTempo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Konfirmasi Export PDF</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Apakah data jadwal pembayaran sudah benar? File PDF akan di-generate sesuai tabel di atas.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit">Batal</Button>
            <Button onClick={handleConfirmExport} color="primary" variant="contained">Ya, Export</Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
} 