import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PageWrapper from "./PageWrapper";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PricingOptionGroup from "../components/PricingOptionGroup";
import pricing from "../data/pricing";
import { useLang } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { getPricingTotal, getSelectedPricingItems } from "../utils/pricingCart";

const MotionBox = motion(Box);

export default function Pricing() {
  const { lang, t } = useLang();
  const services = pricing[lang];
  const [selected, setSelected] = useState({});

  const handleToggle = (groupId, optionId) => {
    setSelected((prev) => {
      const current = prev[groupId] || [];
      const next = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      return { ...prev, [groupId]: next };
    });
  };

  const selectedItems = useMemo(() => getSelectedPricingItems(services, selected), [services, selected]);
  const total = useMemo(() => getPricingTotal(services, selected), [services, selected]);

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
    }),
    []
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 420, damping: 30 } },
    }),
    []
  );

  return (
    <PageWrapper>
      <Box
        sx={{
          minHeight: "calc(100vh - 72px)",
          py: { xs: 5, md: 8 },
          background: "linear-gradient(180deg, #07090d 0%, #11161f 100%)",
        }}
      >
        <MotionBox
          variants={container}
          initial="hidden"
          animate="show"
          sx={{
            width: "min(1180px, calc(100% - 32px))",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 360px" },
            gap: { xs: 3, lg: 4 },
            alignItems: "start",
          }}
        >
          <Box>
            <MotionBox variants={item} sx={{ maxWidth: 760, mb: 3 }}>
              <Typography variant="h3" component="h1" sx={{ fontWeight: 900, letterSpacing: 0, mb: 1 }}>
                {t("pricing.title")}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.68)", fontSize: 18, lineHeight: 1.65 }}>
                {t("pricing.subtitle")}
              </Typography>
            </MotionBox>

            <Stack spacing={2}>
              {services.map((group) => (
                <MotionBox key={group.id} variants={item}>
                  <PricingOptionGroup
                    id={group.id}
                    title={group.title}
                    options={group.options}
                    selected={selected[group.id] || []}
                    onChange={(optionId) => handleToggle(group.id, optionId)}
                  />
                </MotionBox>
              ))}
            </Stack>
          </Box>

          <MotionBox
            variants={item}
            sx={{
              position: { lg: "sticky" },
              top: { lg: 96 },
              p: 2.5,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 1,
              background: "linear-gradient(180deg, rgba(255,255,255,0.095), rgba(255,255,255,0.045))",
              boxShadow: "0 18px 50px rgba(0,0,0,0.32)",
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
              <Typography variant="h5" sx={{ fontWeight: 900 }}>
                {t("pricing.checkoutTitle")}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.58)", fontWeight: 700 }}>
                {selectedItems.length}
              </Typography>
            </Stack>

            <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

            {selectedItems.length === 0 ? (
              <Typography sx={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.55 }}>{t("pricing.empty")}</Typography>
            ) : (
              <Stack spacing={1.5}>
                {selectedItems.map((item) => (
                  <Box key={`${item.groupId}-${item.id}`}>
                    <Typography sx={{ fontWeight: 800 }}>{item.label}</Typography>
                    <Stack direction="row" justifyContent="space-between" gap={1}>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.55)" }}>
                        {item.groupTitle}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.78)", fontWeight: 800 }}>
                        {item.price} €
                      </Typography>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            )}

            <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 2 }}>
              <Typography sx={{ color: "rgba(255,255,255,0.62)" }}>{t("pricing.total")}</Typography>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>
                {total} €
              </Typography>
            </Stack>

            <Button component={Link} to="/contacts" variant="contained" size="large" fullWidth endIcon={<SendIcon />}>
              {t("pricing.discuss")}
            </Button>
          </MotionBox>
        </MotionBox>
      </Box>
    </PageWrapper>
  );
}
