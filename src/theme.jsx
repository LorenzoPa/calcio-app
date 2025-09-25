import { createTheme } from "@mui/material/styles";

// Tema verde (light)
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#047857", // verde Tailwind bg-green-700
    },
    background: {
      default: "#f0fdf4", // verde chiaro Tailwind bg-green-50
    },
  },
});

// Tema scuro
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#065f46", // verde scuro Tailwind bg-green-800
    },
    background: {
      default: "#064e3b", // verde scuro Tailwind bg-green-900
    },
  },
});