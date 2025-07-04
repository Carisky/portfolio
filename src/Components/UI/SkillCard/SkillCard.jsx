import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

export default function SkillCard({ icon, title, description, progress = 0 }) {
  return (
    <Card sx={{
      bgcolor: '#020617',
      color: 'white',
      borderRadius: 2,
      width: 170,
      m: 1,
      textAlign: 'center'
    }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        <Box sx={{ fontSize: 48, color: '#facc16' }}>{icon}</Box>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'gray', mt: 0.5 }}>
          {description}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            mt: 2,
            width: '100%',
            bgcolor: '#111828',
            '& .MuiLinearProgress-bar': { bgcolor: '#facc16' }
          }}
        />
      </CardContent>
    </Card>
  );
}
