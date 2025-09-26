import fs from "fs/promises"; // Per scrivere file in modo asincrono

// --- CONFIGURAZIONE ---
const TEAM_TO_SEARCH = "Italy"; // Modifica con la squadra che vuoi cercare
const OUTPUT_FILE = "api_response.json"; // Nome del file di output

// Carica le credenziali dal file .env
const apiKey = "ce4ed4c8fa244511507015898cb5314b";
const apiHost = "v3.football.api-sports.io";
const apiUrl = "https://v3.football.api-sports.io";

// Controlla se la chiave API è stata caricata
if (!apiKey) {
  console.error("Errore: La chiave API non è stata trovata. Assicurati che VITE_FOOTBALL_API_KEY sia nel file .env");
  process.exit(1); // Esce dallo script se la chiave non c'è
}

/**
 * Funzione principale che esegue la chiamata e salva il file
 */
async function fetchAndSave() {
  console.log(`Avvio ricerca per la nazione: "${TEAM_TO_SEARCH}"...`);

  const headers = new Headers();
  headers.append("x-rapidapi-key", apiKey);
  headers.append("x-rapidapi-host", apiHost);

  const requestOptions = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  try {
    // 1. Esegui la chiamata API per trovare la squadra
    const response = await fetch(
      `${apiUrl}/teams?country=${encodeURIComponent(TEAM_TO_SEARCH)}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Errore HTTP: ${response.status} ${response.statusText}`);
    }

    // 2. Converti la risposta in JSON
    const data = await response.json();
    console.log("Dati ricevuti con successo dall'API.");

    // 3. Salva i dati in un file JSON
    // JSON.stringify(data, null, 2) formatta il JSON per renderlo leggibile
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(data, null, 2));

    console.log(`✅ Risposta salvata correttamente nel file: ${OUTPUT_FILE}`);

  } catch (error) {
    console.error("❌ Si è verificato un errore durante l'operazione:", error.message);
  }
}

// Esegui la funzione
fetchAndSave();