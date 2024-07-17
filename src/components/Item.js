import React from "react";
import { Box, Typography, Button, Avatar, Link, Divider } from "@mui/material";

import {
  AccessTime as AccessTimeIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

const Item = ({ trip }) => {
  return (
    <>
      <Box
        key={trip.id}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          paddingLeft: 0,
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            width: "4px",
            height: "40px",
            backgroundColor: "rgba(0,0,0,0.12)",
            borderTopRightRadius: "2px",
            borderBottomRightRadius: "2px",
          }}
        />
        <Avatar
          src={trip.logo}
          alt={trip.carrier}
          sx={{
            width: 45,
            height: 45,
            marginRight: "16px",
            marginLeft: "16px",
          }}
        />
        <Box sx={{ flexGrow: 0.7 }}>
          <Typography variant="h6">{trip.carrier}</Typography>
          <Link
            href="#"
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#6a6d6e",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            Terms & conditions
            <OpenInNewOutlinedIcon sx={{ fontSize: 16, marginLeft: "4px" }} />
          </Link>
        </Box>

        <Box>
          <Typography variant="body2">
            {trip.date} •{" "}
            <span style={{ fontWeight: "bold" }}>{trip.time}</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#aaa",
              fontWeight: "600",
            }}
          >
            {trip.startLocation}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "40px",
            height: "1px",
            backgroundColor: "#aaa",
            marginLeft: 4,
            marginRight: 2,
          }}
        />
        <Box sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              color: "#aaa",
            }}
          >
            <AccessTimeIcon sx={{ fontSize: 16, marginLeft: "4px" }} />{" "}
            <span>{trip.duration}</span>
          </Typography>
          <Link
            href="#"
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            {trip.transfers}
            <ExpandMoreIcon sx={{ fontSize: 16, marginLeft: "4px" }} />
          </Link>
        </Box>
        <Box
          sx={{
            width: "40px",
            height: "1px",
            backgroundColor: "#aaa",
            marginLeft: 2,
            marginRight: 4,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2">
            <span style={{ fontWeight: "bold" }}>{trip.endTime}</span> •{" "}
            {trip.endDate}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#aaa",
              fontWeight: "600",
            }}
          >
            {trip.endLocation}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right", marginRight: "10px" }}>
          <Typography variant="body2" sx={{ color: "#6a6d6e" }}>
            Starting from
          </Typography>
          <Typography variant="h7" sx={{ color: "green", fontWeight: "bold" }}>
            {trip.price}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" sx={{ marginLeft: "16px" }}>
          Select Tickets
        </Button>
      </Box>

      <Divider sx={{ my: 4, margin: 0, borderBottomWidth: 2 }} />
    </>
  );
};

export default Item;
