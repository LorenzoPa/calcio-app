import React, { useState, useCallback, useEffect } from "react";
import { ThemeProvider, CssBaseline, Box, Container, Typography } from "@mui/material";
import Squad from "./components/Squad";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ResearchForm from "./components/ResearchForm";
import { useTeamSearch } from "./hooks/useTeamSearch";
import { lightTheme, darkTheme } from "./theme";
import teamsData from "./data/teams.json";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [teamCache, setTeamCache] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState({
    username: "",
    favoriteTeamLogo: null,
  });

  // cache teams
  const addToCache = useCallback((key, data) => {
    setTeamCache((prevCache) => ({
      ...prevCache,
      [key]: data,
    }));
  }, []);

  // trova logo in base al nome (ignorando maiuscole/minuscole)
  function findLogoByName(name) {
    if (!name) return null;
    const team = teamsData.response.find(
      (t) => t.team.name.toLowerCase() === name.toLowerCase()
    );
    return team ? team.team.logo : null;
  }

  // al mount → controlla se c'è un token e recupera i dati utente
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      fetch("http://127.0.0.1:8000/auth/me/", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Token non valido o scaduto");
          return res.json();
        })
        .then((data) => {
          console.log("Risposta /auth/me/:", data);
          console.log("favorite_team ricevuto:", data.favorite_team);
          console.log("Logo trovato:", findLogoByName(data.favorite_team));
          setIsLogged(true);
          setUser({
            username: data.username,
            favoriteTeamLogo: findLogoByName(data.favorite_team),
          });
        })
        .catch((err) => {
          console.error("Errore fetch me:", err);
          setIsLogged(false);
          setUser({ username: "", favoriteTeamLogo: null });
        });
    }
  }, []);

  // hook ricerca squadre
  const { team, players, loading, error } = useTeamSearch(
    searchValue,
    teamCache,
    addToCache
  );

  // lista squadre per autocomplete
  const teamNames = teamsData.response.map((item) => item.team.name);
  const teamLogos = teamsData.response.map((item) => ({
    label: item.team.name,
    logo: item.team.logo,
    id: item.team.id,
  }));

  // voci menu profilo
  const vociProfilo = isLogged ? ["Profilo", "Logout"] : ["Login", "Registrazione"];

  // voci menu principale
  const vociMenu = [
    { title: "Home", dest: "home" },
    { title: "Squadre", dest: "squad" },
    { title: "About", dest: "about" },
  ];

  // router "a switch"
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <ResearchForm
              onSearch={setSearchValue}
              loading={loading}
              teamNames={teamNames}
              teamLogos={teamLogos}
              setCurrentPage={setCurrentPage}
            />
            {loading && <Typography sx={{ mt: 3 }}>Caricamento...</Typography>}
            {error && (
              <Typography sx={{ mt: 3, color: "error.main" }}>{error}</Typography>
            )}
          </>
        );
      case "register":
        return (
          <Register
            setCurrentPage={setCurrentPage}
            onClose={() => setCurrentPage("home")}
          />
        );
      case "login":
        return (
          <Login
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            setCurrentPage={setCurrentPage}
            onClose={() => setCurrentPage("home")}
            setUser={setUser}
          />
        );
      case "squad":
        return team && players && players.length > 0 ? (
          <Squad players={players} team={team} isLogged={isLogged} setUser={setUser} />
        ) : (
          <Typography sx={{ mt: 3 }}>Nessuna squadra selezionata</Typography>
        );
      case "about":
        return <Typography sx={{ mt: 3 }}>Questa è la pagina About 👋</Typography>;
      default:
        return <Typography>Pagina non trovata</Typography>;
    }
  };

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
        {/* Navbar */}
        <ResponsiveAppBar
          setCurrentPage={setCurrentPage}
          vociMenu={vociMenu}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          vociProfilo={vociProfilo}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          username={user.username}
          favoriteTeamLogo={user.favoriteTeamLogo}
          setUser={setUser}
        />

        {/* Contenuto pagina */}
        <Container sx={{ mt: 4, textAlign: "center" }}>{renderPage()}</Container>

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
