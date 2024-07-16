import React from "react";

import { Container, Typography, Box } from "@mui/material";

import Categories from "./Categories";
import Preference from "./Preference";
import Location from "./Location";
import Buttons from "./Buttons";
import FlightFilter from "./FlightFilter";
import List from "./List";

const TravelBooking = () => {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (_, newValue) => {
    setValue2(newValue);
  };
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "white", padding: "10px" }}>
      <Box sx={{ marginTop: 0 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Travel Booking Portal
        </Typography>

        <Categories
          value={value}
          onChange={handleChange}
          noOfTabs={["Buses", "Trains", "Flights"]}
        />
        <Box mt={3}>
          <Preference />
          <Location />
          <Location />
          <Buttons />
        </Box>
        <Categories
          value={value2}
          onChange={handleChange2}
          noOfTabs={["Turin ➔ Rome", "Rome ➔ Milan"]}
        />
        <FlightFilter />
        <List />
      </Box>
    </Container>
  );
};

export default TravelBooking;
