import React from 'react';
import { Card, CardHeader, CardContent, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material';

export default function JadwalAngsuran({ jadwal }) {
  if (!jadwal || jadwal.length === 0) return null;
  return (
    <Card>
      <CardHeader title="Jadwal Angsuran" sx={{ color: '#2d7ff9', fontWeight: 600 }} />
      <CardContent>
        <Box sx={{ overflowX: 'auto' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>KONTRAK_NO</TableCell>
                <TableCell>ANGSURAN_KE</TableCell>
                <TableCell>ANGSURAN_PER_BULAN</TableCell>
                <TableCell>TANGGAL_JATUH_TEMPO</TableCell>
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