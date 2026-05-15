import { Box, Typography, Divider } from '@mui/material';
import PageWrapper from './PageWrapper';
import { useMemo, useState } from 'react';
import PricingOptionGroup from '../components/PricingOptionGroup';
import pricing from '../data/pricing';
import { useLang } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

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

  const total = services.reduce((sum, group) => {
    const selectedIds = selected[group.id] || [];
    const groupTotal = group.options
      .filter((opt) => selectedIds.includes(opt.id))
      .reduce((s, o) => s + o.price, 0);
    return sum + groupTotal;
  }, 0);

  // Animations
  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.1 },
      },
    }),
    []
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 420, damping: 30 } },
    }),
    []
  );

  return (
    <PageWrapper>
      <MotionBox
        variants={container}
        initial="hidden"
        animate="show"
        sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}
      >
        <MotionTypography variants={item} variant="h4" gutterBottom>
          {t('pricing.title')}
        </MotionTypography>

        <AnimatePresence>
          {services.map((group) => (
            <MotionBox
              key={group.id}
              variants={item}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <PricingOptionGroup
                title={group.title}
                options={group.options}
                selected={selected[group.id] || []}
                onChange={(optionId) => handleToggle(group.id, optionId)}
              />
            </MotionBox>
          ))}
        </AnimatePresence>

        <Divider sx={{ my: 4 }} />

        {/* Animated total */}
        <MotionTypography
          key={total}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          variant="h5"
        >
          {t('pricing.total')}
          {total} €
        </MotionTypography>
      </MotionBox>
    </PageWrapper>
  );
}
