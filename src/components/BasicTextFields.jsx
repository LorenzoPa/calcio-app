import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, InputAdornment } from "@mui/material";

// 1. Ricevi teamNames
export default function BasicTextFields({ value, setValue, teamNames,teamLogos }) {
      const uniqueTeamNames = teamNames 
    ? Array.from(new Set(teamNames)) 
    : [];

        const uniqueTeamLogos = teamLogos ? Array.from(new Set(teamLogos)):[];
  return (
    <Autocomplete
      // 2. Usa la lista di nomi per le opzioni
      options={uniqueTeamNames || []}
      value={value}
      onInputChange={(event, newInput) => {
        setValue(newInput);
      }}
      sx={{ width: 300 }} // Aggiungi una larghezza per un layout migliore
      renderInput={(params) => (
        <TextField
          {...params}
          label="Nome squadra"
          variant="filled"
          color="primary"
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
              "&:after": {
                borderBottomColor: (theme) => theme.palette.primary.main,
              },
            },
            "& .MuiInputLabel-root": {
              color: "#000000",
            },
            "& label.Mui-focused": {
              color: (theme) => theme.palette.primary.main,
            },
            input: {
              color: "#000000",
            },
          }}
        />

      )}
    />
  );
}
