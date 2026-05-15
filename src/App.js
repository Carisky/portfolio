import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppWrapper from "./components/AppWrapper";
import Pricing from "./pages/Pricing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services/Services";
import AboutService from "./pages/AboutService";
import { LanguageProvider } from "./contexts/LanguageContext";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d6e4ff",
      contrastText: "#07111f",
    },
    background: {
      default: "#07090d",
      paper: "#11151b",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Open Sans", "Segoe UI", Arial, sans-serif',
    button: {
      letterSpacing: 0,
      fontWeight: 800,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
});
function App() {
  return (
    <LanguageProvider>
      <AppWrapper>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about/:serviceId" element={<AboutService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </AppWrapper>
    </LanguageProvider>
  );
}

export default App;
