import React from "react";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Typography,
  Tooltip,
  IconButton,
  CircularProgress,
} from "@mui/material";
import Contact from "./Contact";

const Header = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          backgroundColor: "#051747",
          borderRadius: "8px",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginY: { xs: "10px", sm: "15px", md: "20px" },
          "& > *": {
            margin: { xs: '1px', sm: '2px', md: '4px' },
            minWidth: { xs: 50, sm: 60, md: 70 },
            maxWidth: { xs: 70, sm: 90, md: 110 },
            marginLeft: 10
          },
        
        }}
      >
        <Typography
          sx={{
            color: "#E7E9F0",
            flexGrow: 1,
            textAlign: "center",
            fontFamily: "sans-serif"
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            color: "#E7E9F0",
            flexGrow: 1,
            textAlign: "center",
            fontFamily: "sans-serif"
          }}
        >
          My Works
        </Typography>
        <Typography
          sx={{
            color: "#E7E9F0",
            flexGrow: 1,
            textAlign: "center",
            fontFamily: "sans-serif"
          }}
        >
          Skills
        </Typography>
        <Typography
          sx={{
            color: "#E7E9F0",
            flexGrow: 1,
            textAlign: "center",
            fontFamily: "sans-serif"
          }}
        >
          Contact
        </Typography>
        {/* <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>D</Avatar>
          </IconButton>
        </Tooltip> */}
      </Box>
    </React.Fragment>
  );
};
export default Header;
