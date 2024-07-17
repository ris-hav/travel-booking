import Item from "./Item";
import tripData from "./data/tripData";

import { Box } from "@mui/material";

const List = () => {
  return (
    <Box sx={{ maxWidth: "1200px", margin: 0, maxWidth: "100%" }}>
      {tripData.map((trip) => (
        <Item trip={trip} />
      ))}
    </Box>
  );
};

export default List;
