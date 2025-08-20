import { Box } from "@mui/material";
import PageWrapper from "./PageWrapper";
import styles from "./styles/home.module.css";
export default function Home() {
  return (
    <PageWrapper>
      <Box sx={{ height: "100vh", width: "100%" }}>
        <img className={styles.preview} alt="" src="assets/logo_16_9.png" />
      </Box>
    </PageWrapper>
  );
}
