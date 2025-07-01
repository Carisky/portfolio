import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const NavElementSx = {
    color: "inherit",
    textTransform: "none",
    border: "1px solid rgba(79, 69, 69, 0.9)",
    borderRadius: "0",
    width: "100px",
    "&:hover": {
      backgroundColor: "rgba(75, 75, 75, 0.8)",
      borderColor: "rgba(75, 75, 75, 0.8)",
    },
  };
  const NavButton = ({ children, to = "#" }) => (
    <Button component={Link} to={to} sx={NavElementSx}>
      {children}
    </Button>
  );
  return (
    
    <Box sx={{ width: "100%", height: "3wh", backgroundColor: "#000" }}>
      <nav className={styles.nav}>
        <Box>
          <NavButton to="/">Главная</NavButton>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundImage: `
      repeating-linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2) 0px,
        rgba(255, 255, 255, 0.2) 1px,
        transparent 1px,
        transparent 10px
      )
    `,
            borderBottom: "1px solid rgba(100, 100, 100, 0.3)",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <NavButton to="/services">Услуги</NavButton>
          <NavButton to="/pricing">Цены</NavButton>
          <NavButton to="/contacts">Контакты</NavButton>
          <NavButton to="/about">Обо мне</NavButton>
          <NavButton to="/portfolio">Портфолио</NavButton>
        </Box>
      </nav>
    </Box>
  );
}
