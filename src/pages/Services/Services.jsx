import React from 'react'
import PageWrapper from '../PageWrapper';
import { Box } from '@mui/material';
import PreviewCard from '../../components/PreviewCard';
import services from '../../data/services';

export default function Services() {
  return (
    <PageWrapper>
      <Box sx={{
        display:"flex",
        flexWrap:"wrap",
        gap:"10%",
        justifyContent:"center"
      }}>
        {services.map((service, index) => (
          <PreviewCard
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
