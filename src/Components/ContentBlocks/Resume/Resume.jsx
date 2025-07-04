import React from 'react';
import SkillCard from '../../UI/SkillCard/SkillCard';
import { Box, Typography } from '@mui/material';
import { SiTypescript, SiJavascript, SiDocker, SiGit, SiGithub, SiNodedotjs, SiReact, SiMui, SiFastapi, SiGraphql, SiCss3, SiSass, SiHtml5, SiFigma } from 'react-icons/si';

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
  return (
    <Box  display="flex" justifyContent="center" alignItems="center" flexDirection={"column"}>
      <Box id="resume" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 5 }}>
        <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
          Yehor Korsun
        </Typography>
        <Box sx={{ width: 200, height: 200, bgcolor: '#1e293b', borderRadius: 2 }} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} progress={skill.progress} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
