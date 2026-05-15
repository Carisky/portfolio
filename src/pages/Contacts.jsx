import React, { useMemo, useState } from 'react';
import PageWrapper from './PageWrapper';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Link as MLink,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';

// Motion wrappers
const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Введите имя';
    if (!form.email.trim()) e.email = 'Введите email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Некорректный email';
    if (!form.message.trim()) e.message = 'Напишите сообщение';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field) => (evt) => {
    setForm((prev) => ({ ...prev, [field]: evt.target.value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // Замените '/api/contact' на ваш реальный endpoint
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setToast({ open: true, message: 'Сообщение отправлено', severity: 'success' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setToast({ open: true, message: 'Ошибка отправки. Попробуйте позже.', severity: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }), []);

  const cardHover = { whileHover: { y: -6, transition: { type: 'spring', stiffness: 300 } } };

  return (
    <PageWrapper>
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <MotionBox variants={containerVariants} initial="hidden" animate="show">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
            <EmailIcon />
            <Typography variant="h4" component="h1" fontWeight={700}>
              Contacts
            </Typography>
          </Stack>

          <Grid container spacing={3} justifyContent="center">
            {/* Форма */}
            <Grid item xs={12} md={7} sx={{ width: '75%' }}>
              <MotionCard elevation={6} {...cardHover} sx={{ borderRadius: 4, width: '100%', mx: 'auto' }}>
                <CardHeader
                  avatar={<EmailIcon />}
                  title={
                    <Typography variant="h6" fontWeight={700}>
                      Text us
                    </Typography>
                  }
                  subheader="Отвечаем в течение рабочего дня"
                />
                <Divider />
                <CardContent>
                  <Box component="form" noValidate onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                      <TextField
                        label="Имя"
                        value={form.name}
                        onChange={handleChange('name')}
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                        required
                        fullWidth
                      />
                      <TextField
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        required
                        fullWidth
                      />
                      <TextField
                        label="Сообщение"
                        value={form.message}
                        onChange={handleChange('message')}
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                        required
                        fullWidth
                        multiline
                        minRows={4}
                      />
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          clicking «Send», U accepting our privacy policy
                        </Typography>
                        <Button
                          type="submit"
                          variant="contained"
                          endIcon={<SendIcon />}
                          disabled={submitting}
                          size="large"
                        >
                          {submitting ? 'Sending...' : 'Send'}
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>

            {/* Быстрые контакты */}
            <Grid item xs={12} md={5} sx={{ width: '75%' }}>
              <Stack spacing={3}>
                <MotionCard elevation={4} {...cardHover} sx={{ borderRadius: 4, width: '100%', mx: 'auto' }}>
                  <CardContent>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <TelegramIcon />
                      <Typography variant="h6" fontWeight={700}>Telegram</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                      Prefer Quick chat? Text me on telegram.
                    </Typography>
                    {/* Замените your_username на ваш логин */}
                    <Button
                      component={MLink}
                      href="https://t.me/your_username"
                      target="_blank"
                      rel="noopener"
                      startIcon={<TelegramIcon />}
                      variant="outlined"
                      fullWidth
                      size="large"
                    >
                      Open Chat
                    </Button>
                  </CardContent>
                </MotionCard>

                <MotionCard elevation={4} {...cardHover} sx={{ borderRadius: 4, width: '100%', mx: 'auto' }}>
                  <CardContent>
                    <Stack spacing={1.5}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOnIcon />
                        <Typography variant="subtitle1" fontWeight={700}>Office</Typography>
                      </Stack>
                      <Typography variant="body2">Poland, Silesia</Typography>
                      <Divider sx={{ my: 1 }} />
                      <Stack direction="row" spacing={1} alignItems="center">
                        <PhoneIcon />
                        <Typography variant="subtitle1" fontWeight={700}>Tel</Typography>
                      </Stack>
                      <Typography variant="body2">+48 505 243 582</Typography>
                      <Divider sx={{ my: 1 }} />
                      <Stack direction="row" spacing={1} alignItems="center">
                        <EmailIcon />
                        <Typography variant="subtitle1" fontWeight={700}>Email</Typography>
                      </Stack>
                      <Typography variant="body2">egorkorsun7@gmail.com</Typography>
                    </Stack>
                  </CardContent>
                </MotionCard>
              </Stack>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setToast((t) => ({ ...t, open: false }))}
          severity={toast.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </PageWrapper>
  );
}
