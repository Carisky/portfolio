import { Box } from "@mui/material";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Box sx={{
        marginBottom:"50px"
      }}>
        <Navbar />
      </Box>
    </header>
  );
}
