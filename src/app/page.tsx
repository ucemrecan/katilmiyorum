import FullWidthTabs from "./components/Tabs";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className={styles.box} mt={3} ml={1}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 300,
            letterSpacing: ".3rem",
          }}
        >
          Neque porro quisquam est qui dolorem ipsum
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 300,
            letterSpacing: ".1rem",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien
          elit, varius in bibendum non, tempus non eros. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Proin efficitur luctus turpis
          ut fermentum. Phasellus faucibus lobortis semper.
        </Typography>
      </Box>
      <FullWidthTabs />
    </>
  );
}
