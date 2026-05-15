import React, { useMemo } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { useLang } from "../contexts/LanguageContext";

const MotionCard = motion(Card);

export default function PreviewCard({ title, tagline, description, imgSrc, altTxt, learnMore, options, features = [], priceFrom }) {
  const { t } = useLang();
  const container = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18 },
      show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    }),
    []
  );

  return (
    <MotionCard
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 1,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))",
        boxShadow: "0 18px 44px rgba(0,0,0,0.28)",
      }}
    >
      <CardMedia
        component="div"
        sx={{
          aspectRatio: "16 / 10",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.32)), url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        title={altTxt}
      />

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.4, flexGrow: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={1}>
          <Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 800, letterSpacing: 0 }}>
              {title}
            </Typography>
            <Typography sx={{ mt: 0.5, color: "rgba(255,255,255,0.58)", fontSize: 14 }}>{tagline}</Typography>
          </Box>
          {priceFrom && <Chip label={priceFrom} size="small" sx={{ borderRadius: 1, fontWeight: 700 }} />}
        </Stack>

        <Typography sx={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>{description}</Typography>

        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: "auto", pt: 1 }}>
          {features.map((feature) => (
            <Chip
              key={feature}
              label={feature}
              size="small"
              variant="outlined"
              sx={{ borderRadius: 1, color: "rgba(255,255,255,0.76)", borderColor: "rgba(255,255,255,0.14)" }}
            />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
        <Button component={HashLink} smooth to={learnMore} variant="outlined" size="small">
          {t("services.learnMore")}
        </Button>
        <Button component={HashLink} smooth to={options} variant="contained" size="small" endIcon={<ArrowForwardIcon />}>
          {t("services.calculate")}
        </Button>
      </CardActions>
    </MotionCard>
  );
}
