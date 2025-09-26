import React, { useState, useCallback } from "react";
import { ThemeProvider, CssBaseline, Box, Container, Typography } from "@mui/material";
import Squad from "./components/Squad";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ResearchForm from "./components/ResearchForm";
import { useTeamSearch } from "./hooks/useTeamSearch";
import { lightTheme, darkTheme } from "./theme";
import teamsData from "./data/teams.json"; // 1. Importa il file JSON con le squadre

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [teamCache, setTeamCache] = useState({});

  const addToCache = useCallback((key, data) => {
    setTeamCache((prevCache) => ({
      ...prevCache,
      [key]: data,
    }));
  }, []);

  const { team, players, loading, error } = useTeamSearch(
    searchValue,
    teamCache,
    addToCache
  );

  // 2. Estrai solo i nomi delle squadre per l'autocomplete
  const teamNames = teamsData.response.map((item) => item.team.name);
  const teamLogos = teamsData.response.map((item)=>({label:item.team.name, logo:item.team.logo, id: item.team.id}));

  const vociMenu = [
    { title: "Home", dest: "#" },
    { title: "Squadre", dest: "#" },
    { title: "About", dest: "#" },
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <ResponsiveAppBar vociMenu={vociMenu} darkMode={darkMode} setDarkMode={setDarkMode} />

        <Container sx={{ mt: 4, textAlign: "center" }}>
          {/* 3. Passa i nomi delle squadre al form */}
          <ResearchForm onSearch={setSearchValue} loading={loading} teamNames={teamNames} teamLogos={teamLogos}/>

          {loading && <Typography sx={{ mt: 3 }}>Caricamento...</Typography>}
          {error && <Typography sx={{ mt: 3, color: "error.main" }}>{error}</Typography>}
        </Container>

        {team && players && players.length > 0 && (
          <Container sx={{ mt: 4 }}>
            <Squad players={players} team={team} />
          </Container>
        )}

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
