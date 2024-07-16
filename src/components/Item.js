import { Divider, Typography, Button, Grid, Box } from "@mui/material";

const Item = () => {
  return (
    <Grid item xs={12}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="body1">Trenitalia</Typography>
          <Typography variant="body2">17 Jun - 13:00</Typography>
        </Box>
        <Box>
          <Typography variant="body2">2h 5m</Typography>
          <Typography variant="body2">2 Transfers</Typography>
        </Box>
        <Box>
          <Typography variant="body2">Starting from 13.60 €</Typography>
        </Box>
        <Button variant="contained" color="primary">
          Select Tickets
        </Button>
      </Box>
      <Divider sx={{ my: 4, margin: 0 }} />
    </Grid>
  );
};

export default Item;
