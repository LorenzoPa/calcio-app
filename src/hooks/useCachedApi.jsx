import { useState, useEffect } from "react";


const CACHE_TTL = 24 * 60 * 60 * 1000 * 7; // 1 settimana

export function useCachedApi(url, cacheKey) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          const age = Date.now() - parsed.timestamp;
          if (age < CACHE_TTL) {
            setData(parsed.data);
            setLoading(false);
            return;
          }
        }

        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`HTTP error: ${resp.status}`);
        const json = await resp.json();

        localStorage.setItem(
          cacheKey,
          JSON.stringify({ timestamp: Date.now(), data: json })
        );

        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (url) fetchData(); // evita fetch se url vuoto
  }, [url, cacheKey]);

  return { data, loading, error };
}
