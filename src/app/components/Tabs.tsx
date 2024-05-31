"use client";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabItem from "./TabItem";
import { Stack } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%" }} mt={2}>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            backgroundColor: "white",
            color: "black",
            "& .MuiTabs-indicator": {
              // gray tone background color
              backgroundColor: "#A9A9A9",
            },
          }}
        >
          <Tab
            sx={{
              textTransform: "lowercase",
              fontSize: "1.2rem",
              fontWeight: 300,
            }}
            label="gündem"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              textTransform: "lowercase",
              fontSize: "1.2rem",
              fontWeight: 300,
            }}
            label="politik"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              textTransform: "lowercase",
              fontSize: "1.2rem",
              fontWeight: 300,
            }}
            label="teknoloji"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ backgroundColor: "transparent" }}
      >
        <TabPanel value={value} index={0}>
          <Stack spacing={5}>
            <TabItem />
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
