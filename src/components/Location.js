import { TextField, Grid, InputAdornment } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

const Location = () => {
  return (
    <Grid container spacing={2} mt={1} sx={{ width: "90%" }}>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          label=" Select Departure Location "
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AddLocationAltIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={0.5}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <SwapHorizIcon
          sx={{ border: "1px solid #ddd", borderRadius: "5px", padding: "6px" }}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          label="Select Arrival Location"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AddLocationAltIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          fullWidth
          label="Departure Date"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          fullWidth
          label="Departure Time"
          type="time"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
    </Grid>
  );
};

export default Location;
