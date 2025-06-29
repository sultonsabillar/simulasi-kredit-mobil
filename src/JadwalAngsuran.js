import React from 'react';
import { Card, CardHeader, CardContent, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material';

export default function JadwalAngsuran({ jadwal }) {
  if (!jadwal || jadwal.length === 0) return null;
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardHeader title="Jadwal Angsuran" sx={{ color: '#2d7ff9', fontWeight: 600, pb: 0 }} />
      <CardContent sx={{ pt: 1, pb: 2 }}>
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
      </CardContent>
    </Card>
  );
} 