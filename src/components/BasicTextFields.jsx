import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ value, setValue }) {
  return (
    <TextField
      fullWidth
      label="Nome squadra"
      variant="filled"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      color="primary"
      sx={{
        '& .MuiFilledInput-root': {
          backgroundColor: "#ffffff", // sempre bianco
          '&:hover': {
            backgroundColor: "#f5f5f5", // leggermente più chiaro al hover
          },
          '&:after': {
            borderBottomColor: (theme) => theme.palette.primary.main, // linea dal tema
          },
        },
        '& .MuiInputLabel-root':{
            color: "#000000",
        },
        '& label.Mui-focused': {
          color: (theme) => theme.palette.primary.main, // label dal tema
        },
        input: {
          color: "#000000", // testo sempre nero
        },
      }}
    />
  );
}
