import { useState, useEffect } from "react";
import { useCachedApi } from "./useCachedApi";


const apiKey = import.meta.env.FOOTBALL_API_KEY;
const apiUrl = import.meta.env.FOOTBALL_API_URL;

export function useTeamSearch() {
  const [teamName, setTeamName] = useState("");
  const [team, setTeam] = useState(null);
  const [playersUrl, setPlayersUrl] = useState("");

  // fetch squadra per nome
  const { data: teams, loading: loadingTeam, error: errorTeam } = useCachedApi(
    teamName ? `${apiUrl}/football/teams?search=${encodeURIComponent(teamName)}` : "",
    teamName ? `teams-${teamName}` : ""
  );

  // quando arrivano le squadre, prendo la prima

  
  useEffect(() => {
    if (teams && teams.response?.length && !team) {
      const found = teams.response[0].team; // struttura API-SPORTS
      setTeam(found);
      setPlayersUrl(`${apiUrl}/players/squads?team=${found.id}`);
    }
  }, [teams, team]);

  // fetch giocatori
  const { data: players, loading: loadingPlayers, error: errorPlayers } =
    useCachedApi(playersUrl, playersUrl ? `players-${team?.id}` : "");

  return {
    setTeamName,
    team,
    players: players?.response?.players || [], // struttura API
    loading: loadingTeam || loadingPlayers,
    error: errorTeam || errorPlayers,
  };
}
