import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Box } from "@mui/material";

export default function BasicTextFields({ value, setValue, teamLogos }) {
  return (
    <Autocomplete
  options={teamLogos || []}
  getOptionLabel={(option) => option.label || ""}
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  isOptionEqualToValue={(option, value) => option.label === value.label}
  renderOption={(props, option) => (
    <Box
  component="li"
  {...props}
  key={option.id}   // 🔑 univoco
  sx={{ display: "flex", alignItems: "center", gap: 1 }}
>
  <img src={option.logo} alt={option.label} width={24} height={24} />
  {option.label}
</Box>
  )}
  sx={{ width: 300 }}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Nome squadra"
      variant="filled"
      color="primary"
      sx={{
        "& .MuiFilledInput-root": {
          backgroundColor: "#ffffff",
          "&:hover": { backgroundColor: "#f5f5f5" },
          "&:after": {
            borderBottomColor: (theme) => theme.palette.primary.main,
          },
        },
        "& .MuiInputLabel-root": { color: "#000000" },
        "& label.Mui-focused": {
          color: (theme) => theme.palette.primary.main,
        },
        input: { color: "#000000" },
      }}
    />
  )}
/>
  );
}
