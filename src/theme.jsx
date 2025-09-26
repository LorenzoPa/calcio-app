import { createTheme } from "@mui/material/styles";

// 🌿 Tema chiaro (verde)
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#047857",       // verde principale (bg-green-700)
      light: "#34d399",      // verde chiaro per hover / accents (bg-green-400)
      dark: "#065f46",       // verde scuro per shadow / border
      contrastText: "#ffffff", // testo bianco su primary
    },
    secondary: {
      main: "#facc15",       // giallo principale (bg-yellow-400)
      light: "#fef08a",      // giallo chiaro per hover / accents
      dark: "#ca8a04",       // giallo scuro per shadow / border
      contrastText: "#000000", // testo nero su secondary
    },
    background: {
      default: "#f0fdf4",    // verde chiaro generale (bg-green-50)
      paper: "#ffffff",       // sfondo card / TextField
    },
    text: {
      primary: "#065f46",    // verde scuro per testi principali
      secondary: "#334155",  // grigio/blu per testi secondari
    },
    divider: "#d1d5db",      // grigio chiaro per linee divisorie
  },
  root: {
  backgroundColor: (theme) => theme.palette.background.paper,
  '&:hover': {
    backgroundColor: (theme) => theme.palette.primary.light,
  },
  '&.Mui-focused': {
    backgroundColor: (theme) => theme.palette.background.default,
  },
},
});

// 🌙 Tema scuro (verde)
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0D47A1",       // blu scuro principale
      light: "#5472d3",      // blu chiaro per hover/accents
      dark: "#002171",       // blu ancora più scuro per shadow/border
      contrastText: "#ffffff" // testo su blu scuro
    },
    secondary: {
      main: "#FFC107",       // giallo/arancio per bottoni o highlights
      light: "#FFD54F",
      dark: "#FFA000",
      contrastText: "#000000"
    },
    background: {
      default: "#121E33",    // sfondo generale scuro
      paper: "#1E2A44"       // sfondo card/form
    },
    text: {
      primary: "#ffffff",    // testo principale chiaro
      secondary: "#B0BEC5"   // testo secondario/grigio chiaro
    },
    divider: "#37474F",      // colore linee divisorie
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: (theme) => theme.palette.background.paper,
          '&:hover': {
            backgroundColor: (theme) => theme.palette.primary.light,
          },
          '&.Mui-focused': {
            backgroundColor: (theme) => theme.palette.background.default,
          },
        },
      },
    },
  },
});
