import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSearchStore } from "../../../stores/Search-Store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const searchFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // Custom styles here
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.7)", // Lighter border color
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.9)", // Even lighter on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#C19A6B", // Keep the focused color as defined
            },
          },
        },
      },
    },
  },
});

export default function SearchInputField() {
  const { search, setSearch, performSearch } = useSearchStore();
  return (
    // Apply ThemeProvider here, so the theme is only applied to components within SearchInputField
    <ThemeProvider theme={searchFieldTheme}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          color="primary"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.7)", // Lighter border color
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.9)", // Even lighter on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main", // Use the primary color from the theme for the focused state
              },
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
