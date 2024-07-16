import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Box,
  Paper,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import AirlineSeatLegroomReducedIcon from "@mui/icons-material/AirlineSeatLegroomReduced";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import AddIcon from "@mui/icons-material/Add";
import Location from "./Location";
import FlightFilter from "./FlightFilter";
import List from "./List";

const TravelBooking = () => {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "white", padding: "10px" }}>
      <Box sx={{ marginTop: 0 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Travel Booking Portal
        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Buses" />
          <Tab label="Trains" />
          <Tab label="Flights" />
        </Tabs>
        <Divider sx={{ my: 4, margin: 0 }} />
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                select
                label="Passengers"
                defaultValue="1 Adult, 1 Child"
              >
                <MenuItem value="1 Adult, 1 Child">
                  <PeopleIcon sx={{ marginRight: 1 }} />{" "}
                  <span>1 Adult, 1 Child</span>
                </MenuItem>
                <MenuItem value="2 Adults">
                  <PeopleAltIcon sx={{ marginRight: 1 }} />{" "}
                  <span>2 Adults</span>
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                select
                label="Travel Class"
                defaultValue="Premium Economy"
              >
                <MenuItem value="Premium Economy">
                  <AirlineSeatLegroomExtraIcon sx={{ marginRight: 1 }} />{" "}
                  Premium Economy
                </MenuItem>
                <MenuItem value="Economy">
                  <AirlineSeatLegroomReducedIcon sx={{ marginRight: 1 }} />
                  Economy
                </MenuItem>
                <MenuItem value="Business">
                  <AirlineSeatIndividualSuiteIcon sx={{ marginRight: 1 }} />
                  Business
                </MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Location />
          <Location />
          <Box mt={2} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              color="primary"
              startIcon={<AddIcon />}
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              Add Another Route
            </Button>
            <Box>
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  marginRight: 2,
                  borderColor: "#ddd",
                  color: "#6a6d6e",
                  backgroundColor: "#eee",
                  textTransform: "none",
                }}
              >
                Clear All
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                sx={{ textTransform: "none" }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>

        <Tabs
          value={value2}
          onChange={handleChange2}
          aria-label="basic tabs example"
        >
          <Tab label="Turin ➔ Rome" />
          <Tab label="Rome ➔ Milan" />
        </Tabs>
        <Divider sx={{ my: 4, margin: 0 }} />

        <FlightFilter />
        <List />
      </Box>
    </Container>
  );
};

export default TravelBooking;
