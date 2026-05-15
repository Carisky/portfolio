import { useState } from 'react';
import { Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useLang } from '../contexts/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const isMobile = useMediaQuery('(max-width:900px)');
  const [open, setOpen] = useState(false);

  const NavElementSx = {
    color: 'inherit',
    textTransform: 'none',
    border: '1px solid rgba(79, 69, 69, 0.9)',
    borderRadius: 0,
    minWidth: 100,
    '&:hover': {
      backgroundColor: 'rgba(75, 75, 75, 0.8)',
      borderColor: 'rgba(75, 75, 75, 0.8)',
    },
  };

  const NavButton = ({ children, to = '#' }) => (
    <Button component={Link} to={to} sx={NavElementSx} onClick={() => setOpen(false)}>
      {children}
    </Button>
  );

  const items = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/contacts', label: t('nav.contacts') },
    { to: '/portfolio', label: t('nav.portfolio') },
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: '#000' }}>
      <nav className={styles.nav}>
        {/* Left: brand / home or burger */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isMobile ? (
            <IconButton aria-label="menu" onClick={() => setOpen(true)} sx={{ color: '#fff', border: '1px solid rgba(79,69,69,0.9)', borderRadius: 0 }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <NavButton to="/">{t('nav.home')}</NavButton>
          )}
        </Box>

        {/* Center: decorative line (hidden on mobile to save space) */}
        {!isMobile && (
          <Box
            sx={{
              width: '100%',
              backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 10px)`,
              borderBottom: '1px solid rgba(100, 100, 100, 0.3)',
            }}
          />
        )}

        {/* Right: nav buttons or just lang toggle on mobile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {!isMobile && (
            <>
              {items.slice(1).map((it) => (
                <NavButton key={it.to} to={it.to}>{it.label}</NavButton>
              ))}
            </>
          )}
          <Button onClick={toggleLang} sx={NavElementSx}>
            {lang === 'ru' ? 'PL' : 'RU'}
          </Button>
        </Box>
      </nav>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: '80%', maxWidth: 360, bgcolor: '#0f0f0f', color: '#fff' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
          <Box sx={{ fontWeight: 700 }}>{t('nav.home')}</Box>
          <IconButton aria-label="close" onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(100,100,100,0.3)' }} />
        <List>
          {items.map((it) => (
            <ListItem key={it.to} disablePadding>
              <ListItemButton component={Link} to={it.to} onClick={() => setOpen(false)}>
                <ListItemText primary={it.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: 'rgba(100,100,100,0.3)' }} />
        <Box sx={{ p: 2 }}>
          <Button onClick={() => { toggleLang(); setOpen(false); }} fullWidth sx={{ ...NavElementSx }}>
            {lang === 'ru' ? 'PL' : 'RU'}
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
