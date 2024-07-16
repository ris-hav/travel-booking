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

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const [languageElAccount, setLanguageElAccount] = React.useState(null);

  const handleMenu = (setter) => (event) => {
    setter(event.currentTarget);
  };

  const handleClose = (setter) => () => {
    setter(null);
  };

  return (
    <AppBar
      position="static"
      color="default"
      sx={{ width: "100%", backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar>
        <Box sx={{ border: "1px dashed grey", height: "40px", width: "160px" }}>
          <img
            src="../logo.jpeg"
            alt="Appnox"
            style={{
              height: "40px",
              widhth: "50px",
              background: "none",
              //   objectFit: "contain",
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
        <Button
          color="inherit"
          onClick={handleMenu(setLanguageElAccount)}
          endIcon={<ExpandMoreIcon />}
        >
          EN
        </Button>
        <Menu
          languageEl={languageElAccount}
          open={Boolean(languageElAccount)}
          onClose={handleClose(setLanguageElAccount)}
        >
          <MenuItem onClick={handleClose(setLanguageElAccount)}>EN</MenuItem>
          <MenuItem onClick={handleClose(setLanguageElAccount)}>FR</MenuItem>
          <MenuItem onClick={handleClose(setLanguageElAccount)}>DE</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
