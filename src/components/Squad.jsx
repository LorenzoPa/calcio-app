import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PlayerCard from "./PlayerCard";

export default function Squad({ players, team }) {
  return (
    <Box>
      {team && (
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2, // Spazio tra logo e nome
          }}
        >
          <img
            src={team.logo}
            alt={`${team.name} logo`}
            style={{ height: "1em" }} // L'altezza si adatta alla dimensione del font
          />
          {team.name}
        </Typography>
      )}

      <Grid container spacing={3} alignItems="stretch">
        {players.map((player, idx) => (
          <Grid key={idx}>
            <PlayerCard
              number={player.number || "-"}
              name={player.name || "Sconosciuto"}
              role={player.position || "Ruolo sconosciuto"}
              photo={player.photo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
