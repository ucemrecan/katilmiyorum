import { Container, Box, Stack, Typography, Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function TabItem() {
  return (
    <Stack spacing={2} direction="row">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "200px" }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <ArrowUpwardIcon />
          <ArrowDownwardIcon />
        </Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, letterSpacing: ".3rem", marginLeft: "10px" }}
        >
          315
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              letterSpacing: ".3rem",
              marginBottom: "10px",
            }}
          >
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ width: "100%" }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 300,
              letterSpacing: ".1rem",
              fontSize: "12px",
              marginRight: "10px",
            }}
          >
            başlatan: <strong>John Doe</strong>
          </Typography>
          <Button
            variant="text"
            size="small"
            // should be green tone
            sx={{ color: "#32CD32" }}
          >
            katiliyorum
          </Button>
          <Button
            variant="text"
            size="small"
            // should be red tone
            sx={{ color: "#FF6347" }}
          >
            katilmiyorum
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
