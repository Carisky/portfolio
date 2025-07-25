import React from 'react';
import PageWrapper from '../PageWrapper';
import { Box } from '@mui/material';
import PreviewCard from '../../components/PreviewCard';
import servicesData from '../../data/services';
import { useLang } from '../../contexts/LanguageContext';

export default function Services() {
  const { lang } = useLang();
  const services = servicesData[lang];
  return (
    <PageWrapper>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10%',
          justifyContent: 'center',
        }}
      >
        {services.map((service, index) => (
          <PreviewCard
            key={index}
            title={service.title}
            description={service.description}
            imgSrc={service.imgSrc}
            altTxt={service.altTxt}
            options={"/pricing#" + service.id}
            learnMore={"/about/" + service.id}
          />
        ))}
      </Box>
    </PageWrapper>
  );
}
