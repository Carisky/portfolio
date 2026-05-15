import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLang } from "../contexts/LanguageContext";

function BrandMark() {
  return (
    <Box className={styles.brandMark} aria-hidden="true">
      C
    </Box>
  );
}

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const isMobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);

  const navButtonSx = {
    color: "rgba(255,255,255,0.82)",
    textTransform: "none",
    borderRadius: 1,
    px: 1.5,
    minWidth: "auto",
    fontWeight: 600,
    "&:hover": {
      color: "#fff",
      backgroundColor: "rgba(255,255,255,0.08)",
    },
  };

  const items = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/pricing", label: t("nav.pricing") },
    { to: "/contacts", label: t("nav.contacts") },
    { to: "/portfolio", label: t("nav.portfolio") },
  ];

  return (
    <Box className={styles.navShell}>
      <nav className={styles.nav}>
        <Button component={Link} to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <BrandMark />
          <Box sx={{ textAlign: "left", lineHeight: 1 }}>
            <Typography component="span" className={styles.brandName}>
              {t("brand.name")}
            </Typography>
            <Typography component="span" className={styles.brandRole}>
              {t("brand.role")}
            </Typography>
          </Box>
        </Button>

        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {items.slice(1).map((item) => (
              <Button key={item.to} component={Link} to={item.to} sx={navButtonSx}>
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button onClick={toggleLang} sx={{ ...navButtonSx, border: "1px solid rgba(255,255,255,0.16)" }}>
            {lang === "ru" ? "PL" : "RU"}
          </Button>
          {isMobile && (
            <IconButton
              aria-label="menu"
              onClick={() => setOpen(true)}
              sx={{ color: "#fff", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </nav>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: "82%", maxWidth: 360, bgcolor: "#08090b", color: "#fff" } }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <BrandMark />
            <Box>
              <Typography sx={{ fontWeight: 800 }}>{t("brand.name")}</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.58)", fontSize: 12 }}>{t("brand.role")}</Typography>
            </Box>
          </Box>
          <IconButton aria-label="close" onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
        <List>
          {items.map((item) => (
            <ListItem key={item.to} disablePadding>
              <ListItemButton component={Link} to={item.to} onClick={() => setOpen(false)} sx={{ py: 1.4 }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
