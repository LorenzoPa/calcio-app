import { useState, useEffect } from "react";
import teamsData from "../data/teams.json"; // 1. Importa i dati delle squadre

const apiKey = import.meta.env.VITE_FOOTBALL_API_KEY;
const apiHost = import.meta.env.VITE_FOOTBALL_API_HOST;
const apiUrl = "https://v3.football.api-sports.io";

export function useTeamSearch(searchValue, cache, addToCache) {
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchValue || searchValue.length < 3) {
      setTeam(null);
      setPlayers([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError("");

      const cacheKey = searchValue.toLowerCase();
      if (cache[cacheKey]) {
        setTeam(cache[cacheKey].team);
        setPlayers(cache[cacheKey].players);
        setLoading(false);
        return;
      }

      try {
        // 2. Trova la squadra nel file JSON importato
        const teamInfo = teamsData.response.find(
          (item) => item.team.name.toLowerCase() === cacheKey
        );

        if (!teamInfo) {
          throw new Error("Squadra non trovata.");
        }

        const teamId = teamInfo.team.id;
        const foundTeam = teamInfo.team;

        // 3. Usa l'ID trovato per fare la chiamata API per i giocatori
        const headers = new Headers();
        headers.append("x-rapidapi-key", apiKey);
        headers.append("x-rapidapi-host", apiHost);
        const requestOptions = { method: "GET", headers, redirect: "follow" };

        const playersResp = await fetch(
          `${apiUrl}/players/squads?team=${teamId}`,
          requestOptions
        )
        const playersData = await playersResp.json();
        const foundPlayers = playersData.response[0]?.players || [];
        console.log('Ho fatto una chiamata API a: ',teamInfo.team.name)
        setTeam(foundTeam);
        setPlayers(foundPlayers);
        addToCache(cacheKey, { team: foundTeam, players: foundPlayers });

      } catch (err) {
        setError(err.message);
        setTeam(null);
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchValue, cache, addToCache]);

  return { team, players, loading, error };
}
