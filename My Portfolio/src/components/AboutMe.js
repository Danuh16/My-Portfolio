import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import SpinningCircles from "./SpinningCircle";

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const name = "Your Name"; // Replace with your name
  const description = "A brief description about yourself..."; // Replace with your description

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "10px" : "20px",
        backgroundColor: "#e7e9f0",
        borderRadius: "8px",
        margin: "10px",
        color: "#051747",
        flexDirection: isMobile ? "column" : isTablet ? "column" : "row",
      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: "Center",
          marginRight: isMobile ? 0 : isTablet ? 0 : "20px",
          marginBottom: isMobile ? "20px" : isTablet ? "20px" : 0,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          width: isMobile ? "100%" : isTablet ? "100%" : "auto",
        }}
      >
        <SpinningCircles />
      </Box>
    </Box>
  );
};

export default AboutMe;
