import React, { useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import BasicTextFields from "./BasicTextFields";
import {useTeamSearch} from "../hooks/useTeamSearch";
import Squad from "./Squad";

export default function ResearchForm() {
  const [value, setValue] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // trigger per l'hook

  // chiamiamo l'hook con il termine di ricerca
  const { team, players, loading, error } = useTeamSearch(searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) setSearchTerm(value.trim()); // aggiorna il termine di ricerca
  };

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        bgcolor: "primary.main",
        color: "primary.contrastText",
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 4 }}>
          Ricerca squadra
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}
        >
          <BasicTextFields value={value} setValue={setValue} />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: "9999px",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { bgcolor: "secondary.dark" },
            }}
          >
            Cerca
          </Button>
        </Box>

        {/* Feedback */}
        {loading && <Typography sx={{ mt: 3 }}>Caricamento...</Typography>}
        {error && <Typography sx={{ mt: 3, color: "error.main" }}>{error}</Typography>}

        {/* Squadra */}
        {players.length > 0 && <Box sx={{ mt: 6 }}><Squad players={players} /></Box>}
      </Container>
    </Box>
  );
}
