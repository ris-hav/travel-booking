import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";

import {
  HelpOutline as HelpOutlineIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

// const url =
// ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCFjVfj2rdsk2thEHos20C5dGHEShHMEVdM-b5pzfYJd9tO_iTkh4OyW4AqVKFxh4RZs&usqp=CAU");

const url =
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
            src={url}
            alt="Appnox"
            style={{
              height: "40px",
              width: "100%",
              background: "none",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
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

        <Avatar
          sx={{
            bgcolor: "#1976d2",
            width: 25,
            height: 25,
            fontSize: 16,
            padding: 0.5,
            color: "white",
            marginLeft: 1,
            marginRight: 1,
          }}
        >
          JG
        </Avatar>
        <Button color="inherit" endIcon={<ExpandMoreIcon />}>
          EN
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
