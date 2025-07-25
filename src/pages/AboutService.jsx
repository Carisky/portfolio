import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import PageWrapper from './PageWrapper';
import services from '../data/services';

export default function AboutService() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <PageWrapper>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Услуга не найдена
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
