import React from "react";
import { Grid, Box, Button } from "@mui/material";

import {
  Flight as FlightIcon,
  Hotel as HotelIcon,
  Train as TrainIcon,
  DirectionsBus as BusIcon,
  TimeToLeave as TimeToLeaveIcon,
  Chat as ChatIcon,
} from "@mui/icons-material";

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

const StyledBox = styled(Box)`
  background-color: white;
  width: 4.5%;
  height: 275px;
  border: 1px solid #ddd;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const BookingSelection = () => {
  return (
    <StyledBox>
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
    </StyledBox>
  );
};

export default BookingSelection;
