
import Squad from "./components/Squad";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ResearchForm from "./components/ResearchForm";
import { useTeamSearch } from "./hooks/useTeamSearch";

export default function App({darkMode, setDarkMode }) {
  const { setTeamName, team, players, loading, error } = useTeamSearch();


/*
  const players = [
    { name: "Luca Bianchi", role: "Attaccante", number: 9 },
    { name: "Marco Rossi", role: "Centrocampista", number: 8 },
    { name: "Davide Verdi", role: "Difensore", number: 5 },
    { name: "Giovanni Neri", role: "Portiere", number: 1 },
    { name: "Demba Seck", role: "Portiere", number: 1 },
  ]; */
  const vociMenu = [
    {title: "Home", dest: "#"},
    {title: "Squadre", dest: "#"},
    {title: "About", dest: "#"}
  ]

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-green-50 text-black'}`}>

      {/* header */}

      <ResponsiveAppBar 
        vociMenu = { vociMenu }
        darkMode = { darkMode }
        setDarkMode = { setDarkMode }
        />
      {/*
      <header className="bg-green-700 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">⚽ Il Mio Calcio</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-yellow-300">Home</a>
          <a href="#" className="hover:text-yellow-300">Squadra</a>
          <a href="#" className="hover:text-yellow-300">Calendario</a>
          <a href="#" className="hover:text-yellow-300">Contatti</a>
        </nav>
      </header>
      */}
      
      {/* Hero */}
      <ResearchForm darkMode = {darkMode} onSearch={setTeamName}/>

      {/* Squadra */}
      <Squad players = { players } darkMode = {darkMode} />

      {/* Footer */}
{/*      <footer className="bg-green-800 text-white py-4 text-center"> */}
      <footer className={`py-4 text-center ${darkMode ? 'bg-black-800 text-grey' : 'bg-green-800 text-white'}`}>

        <p>Il Mio Calcio. Progetto realizzato da Lorenzo.</p>
      </footer>
    </div>
  );
}
