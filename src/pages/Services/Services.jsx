import React from "react";
import PageWrapper from "../PageWrapper";
import { Box, Typography } from "@mui/material";
import PreviewCard from "../../components/PreviewCard";
import servicesData from "../../data/services";
import { useLang } from "../../contexts/LanguageContext";

export default function Services() {
  const { lang, t } = useLang();
  const services = servicesData[lang];

  return (
    <PageWrapper>
      <Box
        sx={{
          background: "linear-gradient(180deg, #07090d 0%, #10141b 100%)",
          minHeight: "calc(100vh - 72px)",
          py: { xs: 5, md: 8 },
        }}
      >
        <Box sx={{ width: "min(1180px, calc(100% - 32px))", mx: "auto" }}>
          <Box sx={{ maxWidth: 760, mb: 4 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 900, letterSpacing: 0, mb: 1 }}>
              {t("services.title")}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.68)", fontSize: 18, lineHeight: 1.65 }}>
              {t("services.subtitle")}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 2.5,
              alignItems: "stretch",
            }}
          >
            {services.map((service) => (
              <PreviewCard
                key={service.id}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                imgSrc={service.imgSrc}
                altTxt={service.altTxt}
                features={service.features}
                priceFrom={service.priceFrom}
                options={`/pricing#${service.id}`}
                learnMore={`/about/${service.id}`}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}
