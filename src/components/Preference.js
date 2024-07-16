import {
  TextField,
  Button,
  MenuItem,
  Grid,
  InputAdornment,
} from "@mui/material";

import {
  People as PeopleIcon,
  AirlineSeatLegroomExtra as AirlineSeatLegroomExtraIcon,
  CreditCard as CreditCardIcon,
} from "@mui/icons-material";

const Preference = () => {
  return (
    <Grid container spacing={2}>
      <FareParameters
        label="Passengers"
        value="1 Adult, 1 Child"
        icon={<PeopleIcon />}
      />
      <FareParameters
        label="Travel Class"
        value="Premium Economy"
        icon={<AirlineSeatLegroomExtraIcon />}
      />
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          color="primary"
          startIcon={<CreditCardIcon />}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            color: "#19c38b",
          }}
        >
          Add Loyalty Cards
        </Button>
      </Grid>
    </Grid>
  );
};

function FareParameters({ label, value, icon }) {
  return (
    <Grid item xs={12} md={3}>
      <TextField
        fullWidth
        select
        label={label}
        defaultValue={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
      >
        <MenuItem value={value}>{value}</MenuItem>
      </TextField>
    </Grid>
  );
}

export default Preference;
