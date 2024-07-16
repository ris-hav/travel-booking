import React from "react";
import { Button, Box } from "@mui/material";
import {
  SwapVert as SwapVertIcon,
  FilterList as FilterListIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

const FlightFilter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "15px",
        marginTop: "20px",
        marginBottom: "15px",
      }}
    >
      <Filters label="SortBy" icon={<SwapVertIcon />} start={true} />
      <Filters label="Carrier" icon={<ExpandMoreIcon />} />
      <Filters label="Tranfers" icon={<ExpandMoreIcon />} />
      <Filters label="Time" icon={<ExpandMoreIcon />} />
      <Filters label="Stations" icon={<ExpandMoreIcon />} />
      <Filters label="Price" icon={<ExpandMoreIcon />} />
      <Filters
        label="Show More Filters"
        icon={<FilterListIcon />}
        start={true}
      />
    </Box>
  );
};

function Filters({ label, icon, start = false }) {
  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={start ? icon : null}
      endIcon={!start ? icon : null}
      sx={{
        borderRadius: "20px",
        color: "#45484a",
        border: "1px solid #ddd",
        textTransform: "none",
        "&:hover": {
          borderColor: "#ddd",
        },
      }}
    >
      {label}
    </Button>
  );
}

export default FlightFilter;
