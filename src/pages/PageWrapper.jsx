import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PageWrapper({ children }) {
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        flexGrow:1
    }}>
      <Header />
      <Box sx={{
        flexGrow:1
      }}>{children}</Box>
      <Footer />
    </Box>
  );
}
