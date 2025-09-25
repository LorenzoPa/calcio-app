
import Squad from "./components/Squad";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
export default function App() {
  const players = [
    { name: "Luca Bianchi", role: "Attaccante", number: 9 },
    { name: "Marco Rossi", role: "Centrocampista", number: 8 },
    { name: "Davide Verdi", role: "Difensore", number: 5 },
    { name: "Giovanni Neri", role: "Portiere", number: 1 },
    { name: "Demba Seck", role: "Portiere", number: 1 },
  ];
  const vociMenu = [
    {title: "Home", dest: "#"},
    {title: "Squadre", dest: "#"},
    {title: "About", dest: "#"}
  ]

  return (
    <div className="min-h-screen flex flex-col bg-green-50">


      {/* header */}

      <ResponsiveAppBar vociMenu = { vociMenu }/>
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
      <section className="relative bg-green-900 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Benvenuto nel nostro club</h2>
        <p className="mb-6 text-lg">Scopri la nostra passione per il calcio</p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300">
          Scopri di più
        </button>
      </section>

      {/* Squadra */}
      <Squad players = { players } />

      {/* Footer */}
      <footer className="bg-green-800 text-white py-4 text-center">
        <p>© 2025 Calcio Club. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
