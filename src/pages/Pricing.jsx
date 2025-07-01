import { Grid } from "@mui/material";
import PricingCard from "../components/PricingCard";
import PageWrapper from "./PageWrapper";

export default function Pricing() {
    const gridSX = {display:"flex",justifyContent:"center"}
  return (
    <PageWrapper>
      <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid sx={gridSX} size={6}>
          <PricingCard />
        </Grid>
        <Grid sx={gridSX} size={6}>
          <PricingCard />
        </Grid>
        <Grid sx={gridSX} size={6}>
          <PricingCard />
        </Grid>
        <Grid sx={gridSX} size={6}>
          <PricingCard />
        </Grid>
        <Grid sx={gridSX} size={6}>
          <PricingCard />
        </Grid>
        <Grid sx={gridSX} size={6}>
          <PricingCard />
        </Grid>
      </Grid>
    </PageWrapper>
  );
}
