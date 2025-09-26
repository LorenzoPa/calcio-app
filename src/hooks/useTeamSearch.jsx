import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_FOOTBALL_API_KEY;
const apiHost = import.meta.env.VITE_FOOTBALL_API_HOST;
const apiUrl = "https://v3.football.api-sports.io";


export function useTeamSearch(value) {
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [teamName, setTeamName] = useState("");
  useEffect(() => {
    if (!value || value.length < 3) return; // search richiede almeno 3 caratteri

    const fetchData = async () => {
      setLoading(true);
      setError("");
      setTeam(null);
      setPlayers([]);
      setTeamName("");
      const headers = new Headers();
      headers.append("x-rapidapi-key", apiKey);
      headers.append("x-rapidapi-host", apiHost);

      const requestOptions = {
        method: "GET",
        headers,
        redirect: "follow",
      };

      try {
        // Fetch squadra
        const teamResp = await fetch(
          `${apiUrl}/teams?search=${encodeURIComponent(value)}`,
          requestOptions
        );
        const teamData = await teamResp.json();

        if (!teamData.response || teamData.response.length === 0) {
          setError("Squadra non trovata");
          setLoading(false);
          return;
        }

        const foundTeam = teamData.response[0].team;
        const teamName = teamData.response[0].name;
        setTeam(foundTeam);
        setTeamName(teamName);
        // Fetch giocatori
        const playersResp = await fetch(
          `${apiUrl}/players/squads?team=${foundTeam.id}`,
          requestOptions
        );
        const playersData = await playersResp.json();

        if (playersData.response && playersData.response[0]?.players) {
          setPlayers(playersData.response[0].players);
        } else {
          setPlayers([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [value]);
  console.log(JSON.stringify(players))
  return { team, players, teamName, loading, error };
}
