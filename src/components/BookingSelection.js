import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import TrainIcon from "@mui/icons-material/Train";
import BusIcon from "@mui/icons-material/DirectionsBus";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ChatIcon from "@mui/icons-material/Chat";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  padding: 7px 0 !important;
  &:hover {
    background-color: #d0d0d0 !important;
  }
`;
const StyledButton = styled(Button)`
  color: #4b4b4b !important;
  padding-right: 0 !important;
`;

const BookingSelection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "4.5%",
        height: "275px",
        border: "1px solid #ddd",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <Grid container spacing={2} sx={{ margin: 0, padding: 0, width: "100%" }}>
        <StyledGrid item xs={12}>
          <StyledButton startIcon={<FlightIcon />}></StyledButton>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <StyledButton startIcon={<TrainIcon />}></StyledButton>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <StyledButton startIcon={<BusIcon />}></StyledButton>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <StyledButton startIcon={<HotelIcon />}></StyledButton>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <StyledButton startIcon={<TimeToLeaveIcon />}></StyledButton>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <StyledButton startIcon={<ChatIcon />}></StyledButton>
        </StyledGrid>
      </Grid>
    </Box>
  );
};

export default BookingSelection;
