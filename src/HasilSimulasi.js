import React from 'react';
import { Card, CardHeader, CardContent, Table, TableBody, TableRow, TableCell } from '@mui/material';

export default function HasilSimulasi({ hasil }) {
  if (!hasil) return null;
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Hasil Perhitungan" sx={{ color: '#00c48c', fontWeight: 600 }} />
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>KONTRAK_NO</TableCell>
              <TableCell>{hasil.kontrakNo}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CLIENT NAME</TableCell>
              <TableCell>{hasil.clientName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>OTR</TableCell>
              <TableCell>{hasil.otr.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pokok Utang</TableCell>
              <TableCell>{hasil.pokokUtang.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bunga (%)</TableCell>
              <TableCell>{hasil.bungaPersen}%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Bunga</TableCell>
              <TableCell>{hasil.totalBunga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Angsuran per Bulan</TableCell>
              <TableCell>{hasil.angsuranPerBulan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 