import BasicTextFields from "./BasicTextFields";
import { useState} from "react";

export default function ResearchForm({darkMode, onSearch}) {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim()) onSearch(value.trim());
    };
    return (
        <>
            <section 
            className={`relative text-center py-20 
            ${darkMode ? 'bg-clay-900 text-grey' : 'bg-green-800 text-black'}`}>
                <h2 className="text-4xl font-bold mb-4">Ricerca squadra</h2>
                <form 
                    onSubmit={handleSubmit}
                    className="flex justify-center items-center gap-4" >
                <BasicTextFields value={value} setValue={setValue} />
                <button 
                type="submit"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300">
                    Cerca
                </button>
                </form>
            </section>
        </>
    );
}