import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "#050608",
        py: 3,
      }}
    >
      <Box sx={{ width: "min(1180px, calc(100% - 32px))", mx: "auto" }}>
        <Typography sx={{ color: "rgba(255,255,255,0.48)", fontSize: 14 }}>
          Carisky / Web developer
        </Typography>
      </Box>
    </Box>
  );
}
