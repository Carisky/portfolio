import { Box, Typography, Divider } from "@mui/material";
import PageWrapper from "./PageWrapper";
import { useState } from "react";
import PricingOptionGroup from "../components/PricingOptionGroup";
import pricing from "../data/pricing";
import { useLang } from "../contexts/LanguageContext";



export default function Pricing() {
  const { lang, t } = useLang();
  const services = pricing[lang];
  const [selected, setSelected] = useState({});

  const handleToggle = (groupId, optionId) => {
    setSelected(prev => {
      const current = prev[groupId] || [];
      const next = current.includes(optionId)
        ? current.filter(id => id !== optionId)
        : [...current, optionId];
      return { ...prev, [groupId]: next };
    });
  };

  const total = services.reduce((sum, group) => {
    const selectedIds = selected[group.id] || [];
    const groupTotal = group.options
      .filter(opt => selectedIds.includes(opt.id))
      .reduce((s, o) => s + o.price, 0);
    return sum + groupTotal;
  }, 0);

  return (
    <PageWrapper>
      <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
        <Typography variant="h4" gutterBottom>{t("pricing.title")}</Typography>
        {services.map(group => (
          <PricingOptionGroup
            key={group.id}
            title={group.title}
            options={group.options}
            selected={selected[group.id] || []}
            onChange={optionId => handleToggle(group.id, optionId)}
          />
        ))}
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5">{t("pricing.total")}{total} €</Typography>
      </Box>
    </PageWrapper>
  );
}
