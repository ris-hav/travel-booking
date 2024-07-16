import React from "react";
import { Button, Box, TextField, Grid, InputAdornment } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FlightFilter = () => {
  return (
    <Box sx={{ display: "flex", gap: "5px", marginTop: "10px" }}>
      <Filters label="SortBy" icon={<SwapVertIcon />} start={true} />
      <Filters label="Carrier" icon={<ExpandMoreIcon start={false} />} />
      <Filters label="Tranfers" icon={<ExpandMoreIcon start={false} />} />
      <Filters label="Time" icon={<ExpandMoreIcon />} start={false} />
      <Filters label="Stations" icon={<ExpandMoreIcon start={false} />} />
      <Filters label="Price" icon={<ExpandMoreIcon />} start={false} />
      <Filters
        label="Show More Filters"
        icon={<FilterListIcon />}
        start={true}
      />
    </Box>
  );
};

function Filters({ label, icon, start }) {
  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={start ? icon : null}
      endIcon={!start ? icon : null}
      sx={{
        borderRadius: "20px",
        minWidth: "120px",
        color: "#45484a",
        border: "1px solid #ddd",
      }}
    >
      {label}
    </Button>
  );
}

export default FlightFilter;
