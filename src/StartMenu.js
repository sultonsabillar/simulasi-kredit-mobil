import React from 'react';
import { Card, CardContent, CardHeader, Button, Typography, Box } from '@mui/material';

export default function StartMenu({ onStart }) {
  return (
    <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 400, mx: 'auto', borderRadius: 3, boxShadow: 3 }}>
        <CardHeader
          title={<Typography variant="h5" fontWeight={700} color="#2d7ff9">Selamat Datang</Typography>}
          sx={{ textAlign: 'center', pb: 0 }}
        />
        <CardContent sx={{ textAlign: 'center', pt: 1 }}>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Simulasi Kredit Mobil dengan tampilan modern dan perhitungan otomatis.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 5, py: 1.5, fontWeight: 600, fontSize: '1.1rem', borderRadius: 2 }}
            onClick={onStart}
          >
            Mulai Simulasi
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
} 