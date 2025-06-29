import React, { useState } from 'react';
import { Card, CardContent, CardHeader, TextField, Button, Grid } from '@mui/material';

const defaultForm = {
  kontrakNo: 'AGR00001',
  clientName: 'SUGUS',
  otr: 240000000,
  dp: 20,
  jangkaWaktu: 18,
  tanggalMulai: '2024-01-25',
};

export default function FormSimulasi({ onSubmit }) {
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
      <CardHeader title="Input Data Kredit" sx={{ color: '#2d7ff9', fontWeight: 600, pb: 0 }} />
      <CardContent sx={{ pt: 1, pb: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="KONTRAK_NO"
                name="kontrakNo"
                value={form.kontrakNo}
                onChange={handleChange}
                fullWidth
                required
                margin="dense"
              />
              <TextField
                label="CLIENT NAME"
                name="clientName"
                value={form.clientName}
                onChange={handleChange}
                fullWidth
                required
                margin="dense"
              />
              <TextField
                label="Harga Mobil (OTR)"
                name="otr"
                type="number"
                value={form.otr}
                onChange={handleChange}
                fullWidth
                required
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Down Payment (%)"
                name="dp"
                type="number"
                value={form.dp}
                onChange={handleChange}
                fullWidth
                required
                margin="dense"
              />
              <TextField
                label="Jangka Waktu (bulan)"
                name="jangkaWaktu"
                type="number"
                value={form.jangkaWaktu}
                onChange={handleChange}
                fullWidth
                required
                margin="dense"
              />
              <TextField
                label="Tanggal Mulai Angsuran"
                name="tanggalMulai"
                type="date"
                value={form.tanggalMulai}
                onChange={handleChange}
                fullWidth
                required
                margin="dense"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, px: 4, py: 1.5, fontWeight: 600, fontSize: '1.1rem', borderRadius: 2, display: { xs: 'block', sm: 'inline-block' }, width: { xs: '100%', sm: 'auto' } }}
          >
            Hitung Angsuran
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 