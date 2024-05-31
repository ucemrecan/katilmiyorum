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
          bir seylere katilmayanlarin ortak noktasi
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 300,
            letterSpacing: ".1rem",
          }}
        >
          İnsanlar genellikle ikiye bölünmeye meyillidirler; kahve mi çay mı,
          yaz mı kış mı, deniz mi dağ mı, pepsi mi kola mı, Windows mu Mac mi,
          Android mi iOS mu... benzer bir karar sürecine hoş geldiniz.
        </Typography>
      </Box>
      <FullWidthTabs />
    </>
  );
}
