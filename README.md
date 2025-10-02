# ⚽ Calcio-App

Una web app in **React + Vite** per la ricerca di squadre di calcio e la gestione del proprio profilo utente.  
Il progetto integra un **backend Django REST** per registrazione/login e salvataggio della squadra preferita.

---

## 📋 Caratteristiche principali

- 🔍 Ricerca di squadre di calcio inserendo il nome (anche parziale)  
- ⚡ Filtraggio dei risultati in tempo reale mentre l’utente scrive  
- 🎨 Interfaccia semplice e intuitiva con **Material UI**  
- ⚙️ Gestione dello stato tramite **React Hooks**  
- 👤 Registrazione e login con **autenticazione JWT**  
- ⭐ Salvataggio della squadra preferita (collegato al backend)  
- 🌓 Supporto modalità chiara/scura  

---

## 🧰 Tecnologie usate

- React  
- Vite  
- Material UI  
- JavaScript  
- Django REST Framework (backend)  
- JWT (SimpleJWT) per autenticazione  

---

## 🚀 Come avviare il progetto

1. Clona il repository
```
git clone https://github.com/LorenzoPa/calcio-app.git
```
Entra nella cartella del progetto

```
cd calcio-app
```
Installa le dipendenze

```
npm install
```
Avvia l’app in modalità sviluppo

```
npm run dev
```
Apri il browser su http://localhost:5173

⚠️ Per il corretto funzionamento del login/registrazione è necessario avviare anche il backend LoginRegisterAPI.

🔧 Struttura del progetto
```
calcio-app/
├── public/
│   └── index.html
├── src/
│   ├── components/       # Componenti React (navbar, ricerca, login, register, ecc.)
│   ├── hooks/            # Custom hook per ricerca squadre
│   ├── data/             # JSON con squadre (cache locale)
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```
🎯 Possibili sviluppi futuri
Paginazione dei risultati

Dettagli extra delle squadre (rosa completa, statistiche, ecc.)

Gestione profilo utente avanzata

Salvataggio multiplo di squadre preferite

Deployment online (frontend + backend)

📝 Note
Progetto nato come esercizio personale per approfondire l’uso di React, API REST e autenticazione con JWT.
Contributi, suggerimenti e pull request sono sempre benvenuti! 🚀


