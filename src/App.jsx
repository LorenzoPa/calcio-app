import React from "react";
import { ThemeProvider, CssBaseline, Box, Container, Typography } from "@mui/material";
import Squad from "./components/Squad";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ResearchForm from "./components/ResearchForm";
import { useTeamSearch } from "./hooks/useTeamSearch";
import { lightTheme, darkTheme } from "./theme";

export default function App({ darkMode, setDarkMode }) {
  const { setTeamName, team, teamName, players, loading, error } = useTeamSearch();

  const vociMenu = [
    { title: "Home", dest: "#" },
    { title: "Squadre", dest: "#" },
    { title: "About", dest: "#" },
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Resetta gli stili globali e applica colori background/text */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {/* Header */}
        <ResponsiveAppBar vociMenu={vociMenu} darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero */}
        <Container sx={{ mt: 4 }}>
          <ResearchForm onSearch={setTeamName} />
        </Container>

        {/* Squadra */}
        
         
          <Squad players={players} teamName={teamName} />
        

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 4,
            textAlign: "center",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            mt: "auto",
          }}
        >
          <Typography>Il Mio Calcio. Progetto realizzato da Lorenzo.</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
