import React from 'react';
import Block from '../../Components/UI/Block/Block';
import SkillCard from '../../Components/UI/SkillCard/SkillCard';
import { Box, Typography } from '@mui/material';
import { SiTypescript, SiJavascript, SiDocker, SiGit, SiGithub, SiNodedotjs, SiReact, SiMui, SiFastapi, SiGraphql, SiCss3, SiSass, SiHtml5, SiFigma } from 'react-icons/si';

const skills = [
  { icon: <SiTypescript />, title: 'TypeScript', description: 'TypeScript' },
  { icon: <SiJavascript />, title: 'JavaScript', description: 'JavaScript' },
  { icon: <SiDocker />, title: 'Docker', description: 'Docker' },
  { icon: <SiGit />, title: 'Git', description: 'Git version control' },
  { icon: <SiGithub />, title: 'Github', description: 'GitHub platform' },
  { icon: <SiNodedotjs />, title: 'NodeJS', description: 'Node.js runtime' },
  { icon: <SiReact />, title: 'React', description: 'React library' },
  { icon: <SiMui />, title: 'MUI', description: 'Material UI' },
  { icon: <SiFastapi />, title: 'REST API', description: 'REST APIs' },
  { icon: <SiGraphql />, title: 'GraphQL', description: 'GraphQL' },
  { icon: <SiCss3 />, title: 'CSS', description: 'CSS3' },
  { icon: <SiSass />, title: 'SCSS', description: 'Sass/SCSS' },
  { icon: <SiHtml5 />, title: 'HTML', description: 'HTML5 markup' },
  { icon: <SiFigma />, title: 'Figma', description: 'Figma designs' },
];

export default function Resume() {
  return (
    <Block mode="dark" display="flex" justifyContent="center" alignItems="center" flex_dir="column">
      <Box id="resume" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 5 }}>
        <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
          Yehor Korsun
        </Typography>
        <Box sx={{ width: 200, height: 200, bgcolor: '#1e293b', borderRadius: 2 }} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} progress={0} />
          ))}
        </Box>
      </Box>
    </Block>
  );
}
