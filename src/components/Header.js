import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";

import {
  HelpOutline as HelpOutlineIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

import styled from "styled-components";

const StyledAvatar = styled(Avatar)`
  background-color: #1976d2 !important;
  width: 25px !important;
  height: 25px !important;
  font-size: 16px !important;
  padding: 4px;
  margin-left: 1px;
  margin-right: 1px;
`;

const logo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WKZ74XkYlonM5VO5njVdvPp69D-9ye3MPA&s";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{ width: "100%", backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar>
        <Box sx={{ height: "40px", width: "160px" }}>
          <img
            src={logo}
            alt="Appnox"
            style={{
              height: "100%",
              width: "100%",
              // background: "none",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <Button color="inherit">Home</Button>
          <Button color="inherit" endIcon={<ExpandMoreIcon />}>
            Travel
          </Button>
          <Button color="inherit" endIcon={<ExpandMoreIcon />}>
            Reports
          </Button>
          <Button color="inherit" endIcon={<ExpandMoreIcon />}>
            Help
          </Button>
          <Button color="inherit" endIcon={<ExpandMoreIcon />}>
            Admin
          </Button>
        </Box>
        <IconButton size="large" color="inherit">
          <HelpOutlineIcon />
        </IconButton>
        <StyledAvatar>JG</StyledAvatar>
        <Button color="inherit" endIcon={<ExpandMoreIcon />}>
          EN
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
