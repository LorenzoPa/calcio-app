import PlayerCard from "./PlayerCard";

export default function Squad({ players }) {
  return (
    <section className="flex-1 py-10 px-6">
      <h3 className="text-3xl font-bold text-center mb-8">La Nostra Squadra</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {players.map((player, idx) => (
          <PlayerCard
            key={idx}
            number={player.number}
            name={player.name}
            role={player.role}
          />
        ))}
      </div>
    </section>
  );
}
