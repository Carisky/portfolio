import React, { useMemo } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

export default function PreviewCard({
  title,
  description,
  imgSrc,
  altTxt,
  learnMore,
  options,
}) {
  const container = useMemo(() => ({
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  }), []);

  const button = useMemo(() => ({
    hidden: { opacity: 0, y: 8 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.08, type: 'spring', stiffness: 320, damping: 24 } }),
  }), []);

  return (
    <MotionCard
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      sx={{
        maxWidth: 345,
        mt: 2.5,
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0px 6px 24px rgba(0,0,0,0.25)',
      }}
    >
      {/* Media with subtle zoom */}
      <CardMedia
        component={motion.div}
        initial={false}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        sx={{ height: 220, backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        title={altTxt}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <HashLink smooth to={learnMore} style={{ textDecoration: 'none' }}>
          <MotionBox variants={button} custom={0}>
            <Button variant="outlined" size="small">Learn More</Button>
          </MotionBox>
        </HashLink>
        <HashLink smooth to={options} style={{ textDecoration: 'none' }}>
          <MotionBox variants={button} custom={1}>
            <Button variant="outlined" size="small">Options</Button>
          </MotionBox>
        </HashLink>
      </CardActions>
    </MotionCard>
  );
}
