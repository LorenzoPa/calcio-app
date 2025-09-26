import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import BasicTextFields from "./BasicTextFields";

// 1. Ricevi teamNames
export default function ResearchForm({ onSearch, loading, teamNames,teamLogos}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && value.trim()) {
      onSearch(value.trim());
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 4 }}
    >
      {/* 2. Passa teamNames e la funzione per aggiornare il valore */}
      <BasicTextFields value={value} setValue={setValue} teamNames={teamNames} teamLogos={teamLogos} />
      <Button type="submit" variant="contained" disabled={loading}>
        {loading ? "Caricamento..." : "Cerca"}
      </Button>
    </Box>
  );
}
