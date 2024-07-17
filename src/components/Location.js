import { TextField, Grid, InputAdornment } from "@mui/material";
import {
  AddLocationAlt as AddLocationAltIcon,
  SwapHoriz as SwapHorizIcon,
} from "@mui/icons-material";

const Location = () => {
  return (
    <Grid container spacing={2} mt={1} sx={{ width: "100%" }}>
      <FlightDetails
        label="Select Departure Location"
        icon={<AddLocationAltIcon />}
      />
      <Grid
        item
        xs={12}
        md={0.5}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <SwapHorizIcon
          sx={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "6px",
            cursor: "pointer",
          }}
        />
      </Grid>
      <FlightDetails
        label="Select Arrival Location"
        icon={<AddLocationAltIcon />}
      />
      <FlightDetails label="Departure Date" type="date" md={2} />
      <FlightDetails label="Time" type="time" md={2} />
    </Grid>
  );
};

function FlightDetails({ label, type = "text", icon = "", md = 3 }) {
  return (
    <Grid item xs={12} md={md}>
      <TextField
        fullWidth
        label={label}
        type={type}
        InputProps={
          icon
            ? {
                endAdornment: (
                  <InputAdornment position="end">{icon}</InputAdornment>
                ),
              }
            : null
        }
        InputLabelProps={!icon ? { shrink: true } : null}
      />
    </Grid>
  );
}

export default Location;
