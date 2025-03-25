import React from "react";
import { Avatar, Box, useMediaQuery, useTheme } from "@mui/material";
import pic from "../assets/Me.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const socialMediaIcons = [
  {
    icon: <LinkedInIcon sx={{ fontSize: "50px", color: "#E7E9F0", marginTop: 1 }} />,
    link: "#",
  },
  {
    icon: <TelegramIcon sx={{ fontSize: "50px", color: "#E7E9F0", marginTop: 1, marginRight: 1 }} />,
    link: "#",
  },
  {
    icon: <InstagramIcon sx={{ fontSize: "50px", color: "#E7E9F0", marginTop: 1 }} />,
    link: "#",
  },
];

const SpinningCircles = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const imageSize = isMobile ? 300 : isTablet ? 400 : 700;
  const imageHeight = isMobile ? 400 : isTablet ? 600 : 900;
  const circleDiameter = isMobile ? 300 : isTablet ? 400 : 500;
  const iconSize = isMobile ? 40 : isTablet ? 50 : 60;
  const iconFontSize = isMobile ? "20px" : isTablet ? "25px" : "30px";
  const circleOffset = isMobile ? 20 : isTablet ? 30 : 30;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
        backgroundColor: "#e7e9f0",
      }}
    >
      <Avatar
        src={pic}
        sx={{
          width: imageSize,
          height: imageHeight,
          zIndex: 2,
          marginBottom: isMobile ? 20 : isTablet ? 30 : 35,
          marginRight: isMobile ? 5 : isTablet ? 10 : 10,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: circleDiameter,
          height: circleDiameter,
          borderRadius: "50%",
          border: "1px solid #051747",
          opacity: 0.5,
          clipPath: "inset(0 0 0 50%)",
        }}
      ></Box>

      <Box sx={{ position: "absolute" }}>
        {socialMediaIcons.map((skill, index) => {
          const angle = 60 - (index * 90) / (socialMediaIcons.length - 1);
          const x = 250 * Math.cos((angle * Math.PI) / 180);
          const y = 250 * Math.sin((angle * Math.PI) / 180);

          return (
            <div key={index}>
              <div
                style={{
                  position: "absolute",
                  top: `calc(80% - ${y}px - ${circleOffset}px)`,
                  left: `calc(50% + ${x - (isMobile ? 20 : isTablet ? 30 : 30)}px)`,
                  width: iconSize,
                  height: iconSize,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#535f80",
                }}
              >
                <Box
                  sx={{
                    color: "#E7E9F0",
                    fontSize: iconFontSize,
                  }}
                >
                  {skill.icon}
                </Box>
              </div>
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default SpinningCircles;