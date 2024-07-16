import { Button, Box } from "@mui/material";
import { Search as SearchIcon, Add as AddIcon } from "@mui/icons-material";
const Buttons = () => {
  return (
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
          sx={{
            marginRight: 2,
            borderColor: "#ddd",
            color: "#6a6d6e",
            backgroundColor: "#eee",
            textTransform: "none",
            "&:hover": {
              borderColor: "#ddd",
            },
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
  );
};

export default Buttons;
