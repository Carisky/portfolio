import { useParams, Link } from "react-router-dom";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageWrapper from "./PageWrapper";
import servicesData from "../data/services";
import { useLang } from "../contexts/LanguageContext";

export default function AboutService() {
  const { lang, t } = useLang();
  const { serviceId } = useParams();
  const service = servicesData[lang].find((item) => item.id === serviceId);

  if (!service) {
    return (
      <PageWrapper>
        <Box sx={{ minHeight: "60vh", p: 4 }}>
          <Typography variant="h4" gutterBottom>
            {t("aboutService.notFound")}
          </Typography>
        </Box>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Box sx={{ background: "linear-gradient(180deg, #07090d 0%, #10141b 100%)", minHeight: "calc(100vh - 72px)", py: { xs: 5, md: 8 } }}>
        <Box sx={{ width: "min(1060px, calc(100% - 32px))", mx: "auto" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 0.9fr" }, gap: 4, alignItems: "center" }}>
            <Box>
              <Chip label={service.priceFrom} sx={{ borderRadius: 1, mb: 2, fontWeight: 800 }} />
              <Typography variant="h3" component="h1" sx={{ fontWeight: 900, letterSpacing: 0, mb: 1 }}>
                {service.title}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.62)", fontSize: 18, mb: 2 }}>{service.tagline}</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.74)", fontSize: 18, lineHeight: 1.7 }}>{service.description}</Typography>
              <Button component={Link} to={`/pricing#${service.id}`} variant="contained" sx={{ mt: 3 }} endIcon={<ArrowForwardIcon />}>
                {t("aboutService.calculate")}
              </Button>
            </Box>
            <Box
              component="img"
              src={service.imgSrc}
              alt={service.altTxt}
              sx={{
                width: "100%",
                aspectRatio: "16 / 11",
                objectFit: "cover",
                borderRadius: 1,
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.36)",
              }}
            />
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mt: 5 }}>
            <Box sx={{ p: 2.5, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 1, background: "rgba(255,255,255,0.045)" }}>
              <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
                {t("aboutService.included")}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {service.features.map((feature) => (
                  <Chip key={feature} label={feature} variant="outlined" sx={{ borderRadius: 1 }} />
                ))}
              </Stack>
            </Box>
            <Box sx={{ p: 2.5, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 1, background: "rgba(255,255,255,0.045)" }}>
              <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
                {t("aboutService.result")}
              </Typography>
              {service.details.map((detail) => (
                <Typography key={detail} sx={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.65, mb: 1.5 }}>
                  {detail}
                </Typography>
              ))}
              <Typography sx={{ color: "#fff", fontWeight: 800, mt: 2 }}>{service.outcome}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}
