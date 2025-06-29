import React from 'react';
import { Card, CardHeader, CardContent, Table, TableBody, TableRow, TableCell } from '@mui/material';

export default function HasilSimulasi({ hasil }) {
  if (!hasil) return null;
  return (
    <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
      <CardHeader title="Hasil Perhitungan" sx={{ color: '#2d7ff9', fontWeight: 600, pb: 0 }} />
      <CardContent sx={{ pt: 1, pb: 2 }}>
        <Table size="small" sx={{ minWidth: 320 }}>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontWeight: 500 }}>KONTRAK_NO</TableCell>
              <TableCell>{hasil.kontrakNo}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 500 }}>CLIENT NAME</TableCell>
              <TableCell>{hasil.clientName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 500 }}>OTR</TableCell>
              <TableCell>{hasil.otr.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 500 }}>Pokok Utang</TableCell>
              <TableCell>{hasil.pokokUtang.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 500 }}>Bunga (%)</TableCell>
              <TableCell>{hasil.bungaPersen}%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 500 }}>Total Bunga</TableCell>
              <TableCell>{hasil.totalBunga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 500 }}>Angsuran per Bulan</TableCell>
              <TableCell>{hasil.angsuranPerBulan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 