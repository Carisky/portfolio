import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageWrapper from "./PageWrapper";
import styles from "./styles/home.module.css";
import { Link } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLang();

  return (
    <PageWrapper>
      <Box className={styles.hero}>
        <Box className={styles.heroInner}>
          <Box className={styles.copy}>
            <Chip label="React / MUI / Payload CMS / API" className={styles.chip} />
            <Typography variant="h1" className={styles.title}>
              {t("brand.name")}
            </Typography>
            <Typography variant="h5" className={styles.role}>
              {t("brand.role")}
            </Typography>
            <Typography className={styles.intro}>{t("brand.intro")}</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
              <Button component={Link} to="/pricing" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                {t("brand.primaryCta")}
              </Button>
              <Button component={Link} to="/services" variant="outlined" size="large">
                {t("brand.secondaryCta")}
              </Button>
            </Stack>
          </Box>

          <Box className={styles.visual}>
            <img src="/assets/logo_16_9.png" alt="Carisky portfolio preview" />
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
}
