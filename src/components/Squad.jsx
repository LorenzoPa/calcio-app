import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PlayerCard from "./PlayerCard";

export default function Squad({ players, teamName }) {
  return (
<Box >

      <Typography
        variant="h3"
        component="h3"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 8 }}
            >
        {teamName}
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {players.map((player, idx) => (
          <Grid key={idx}>
            <PlayerCard
              number={player.number || "-"}
              name={player.name || "Sconosciuto"}
              role={player.position || "Ruolo sconosciuto"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
