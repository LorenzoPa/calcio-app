import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PlayerCard from "./PlayerCard";
import Fab from '@mui/material/Fab';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';



  
export default function Squad({ players, team, isLogged, setUser }) {
  const handleFavorite = async (team) => {
  const token = localStorage.getItem("access");
  try {
    const res = await fetch("http://127.0.0.1:8000/auth/favorite/team/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
      body: JSON.stringify({
        favorite_team: team.name
      }),
    });
    if (res.ok){
      console.log("Squadra salvata nei preferiti");
      setUser((prev) => ({
        ...prev,
        favoriteTeamLogo: team.logo,
      }));
      
    } else {
      console.error("error nel salvataggio dei preferiti");
    }
  }catch(err){
    console.error("Errore di rete: ", err);
  }
}
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
          {isLogged && (
            <Fab aria-label="like" onClick={() => handleFavorite(team)}>
              <StarBorderOutlinedIcon />
            </Fab>
          )}
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
