import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import PageWrapper from './PageWrapper';
import servicesData from '../data/services';
import { useLang } from '../contexts/LanguageContext';

export default function AboutService() {
  const { lang, t } = useLang();
  const { serviceId } = useParams();
  const service = servicesData[lang].find(s => s.id === serviceId);

  if (!service) {
    return (
      <PageWrapper>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            {t('aboutService.notFound')}
          </Typography>
        </Box>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {service.title}
        </Typography>
        <Box component="img" src={service.imgSrc} alt={service.altTxt} sx={{ width: '100%', maxHeight: 400, objectFit: 'cover', mb: 2 }} />
        <Typography variant="body1" paragraph>{service.details[0]}</Typography>
        <Typography variant="body1" paragraph>{service.details[1]}</Typography>
      </Box>
    </PageWrapper>
  );
}
