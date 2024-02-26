import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSearchStore } from "../../../stores/Search-Store";

export default function SearchInputField() {
  const { search, setSearch } = useSearchStore();
  return (
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
        label="Outlined"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
}
