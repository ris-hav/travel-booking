import React from "react";
import { Container, Box } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import Header from "./Header";
import BookingSelection from "./BookingSelection";
import TravelBooking from "./TravelBooking";

function App() {
  return (
    <>
      <Container maxWidth={false} sx={{ padding: " 0px !important" }}>
        <Header />
      </Container>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <BookingSelection />
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            padding: 0,
            margin: "15px",
            marginTop: 0,
          }}
        >
          <HistoryIcon
            sx={{
              backgroundColor: "white",
              color: "#4b4b4b",
              border: "1px solid #ddd",
              padding: "4px",
              borderRadius: "5px",
              marginBottom: "5px",
              cursor: "pointer",
            }}
          />

          <TravelBooking />
        </Box>
      </Box>
    </>
  );
}

export default App;
