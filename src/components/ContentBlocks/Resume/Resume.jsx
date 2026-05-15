import React, { useMemo } from 'react';
import SkillCard from '../../UI/SkillCard/SkillCard';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  SiTypescript, SiJavascript, SiDocker, SiGit, SiGithub, SiNodedotjs, SiReact, SiMui, SiFastapi, SiGraphql, SiCss3, SiSass, SiHtml5, SiFigma,
} from 'react-icons/si';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const skills = [
  { icon: <SiTypescript />, title: 'TypeScript', description: 'TypeScript', progress: 78 },
  { icon: <SiJavascript />, title: 'JavaScript', description: 'JavaScript', progress: 93},
  { icon: <SiDocker />, title: 'Docker', description: 'Docker', progress: 56},
  { icon: <SiGit />, title: 'Git', description: 'Git version control', progress: 82},
  { icon: <SiGithub />, title: 'Github', description: 'GitHub platform', progress: 90},
  { icon: <SiNodedotjs />, title: 'NodeJS', description: 'Node.js runtime', progress: 100},
  { icon: <SiReact />, title: 'React', description: 'React library', progress: 87},
  { icon: <SiMui />, title: 'MUI', description: 'Material UI', progress: 80},
  { icon: <SiFastapi />, title: 'REST API', description: 'REST APIs', progress: 85},
  { icon: <SiGraphql />, title: 'GraphQL', description: 'GraphQL', progress: 43},
  { icon: <SiCss3 />, title: 'CSS', description: 'CSS3', progress: 90},
  { icon: <SiSass />, title: 'SCSS', description: 'Sass/SCSS', progress: 70},
  { icon: <SiHtml5 />, title: 'HTML', description: 'HTML5 markup', progress: 100},
  { icon: <SiFigma />, title: 'Figma', description: 'Figma designs', progress: 65},
];

export default function Resume() {
  const container = useMemo(() => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
  }), []);

  const item = useMemo(() => ({
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 420, damping: 28 } },
  }), []);

  const hoverLift = { whileHover: { y: -6, scale: 1.02 }, whileTap: { scale: 0.98 } };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <MotionBox
        id="resume"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 5 }}
      >
        <MotionTypography
          variants={item}
          variant="h2"
          sx={{ color: 'white', mb: 2 }}
        >
          Yehor Korsun
        </MotionTypography>

        <MotionBox
          variants={item}
          sx={{ width: 200, height: 200, bgcolor: '#1e293b', borderRadius: 2 }}
          initial={{ rotate: -4, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          whileHover={{ rotate: 1, scale: 1.03 }}
        />

        <MotionBox
          variants={container}
          sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 4, gap: 2 }}
        >
          {skills.map((skill, index) => (
            <MotionBox key={index} variants={item} {...hoverLift}>
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                progress={skill.progress}
              />
            </MotionBox>
          ))}
        </MotionBox>
      </MotionBox>
    </Box>
  );
}
