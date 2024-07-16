import React from "react";
import { Container, Box } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import styled from "styled-components";

import Header from "./Header";
import BookingSelection from "./BookingSelection";
import TravelBooking from "./TravelBooking";

const StyledHistoryIcon = styled(HistoryIcon)`
  background-color: white;
  color: #4b4b4b;
  border: 1px solid #ddd;
  padding: 4px;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const ContentBox = styled(Box)`
  display: flex;
  margin-top: 20px;
`;

const DisplayBox = styled(Box)`
  flex-grow: 1;
  padding: 0;
  margin: 15px;
  margin-top: 0;
`;

function App() {
  return (
    <>
      <Header />
      <ContentBox>
        <BookingSelection />
        <DisplayBox>
          <StyledHistoryIcon />
          <TravelBooking />
        </DisplayBox>
      </ContentBox>
    </>
  );
}

export default App;
