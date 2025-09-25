export default function PlayerCard({ number, name, role, darkMode }) {
  return (
    <div className={`shadow-md rounded-xl p-4 text-center border transition
  ${darkMode 
    ? 'bg-gray-800 text-white border-gray-700 hover:shadow-lg' 
    : 'bg-white text-black border-green-200 hover:shadow-lg'}`}>

      <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
        {number}
      </div>
      <h4 className="text-xl font-semibold">{name}</h4>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}