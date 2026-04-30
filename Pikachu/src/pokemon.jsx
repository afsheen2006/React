import "./index.css"
import { useState } from "react"
import { useEffect } from "react"
import { PokemonCard } from "./pokemonCards.jsx"

export const Pokemon = () => {


    const [pokemon, setPokemon] = useState([])
    const API = "https://pokeapi.co/api/v2/pokemon?limit=124"
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const fetchPokemon = async () => {
        try{
            const response = await fetch(API);
            const data = await response.json();
            console.log(data);

            const pokemonData=data.results.map(async (curpokemon)=>{
                const res = await fetch(curpokemon.url);
                const data = await res.json();
                return data;
            })

            const DetailedData = await Promise.all(pokemonData)
            console.log(DetailedData);
            setPokemon(DetailedData);
            setLoading(false);

        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchPokemon();
        };
        fetchData();
    }, []);

    const SearchData= pokemon.filter((curpokemon) =>
        curpokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if  (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }   

    return (
        <>
        <section className="Container">
            <header>
                <h1>Let's Catch Pokemon</h1>
            </header>
            <div className="pokemon-search">
                <input className="search-input" type="text" placeholder="Search Pokémon..." value={searchTerm} onChange={handleSearch} />
            </div>
            <div>
                <ul className="Cards">
                    {SearchData.map((curpokemon) => (
                        <PokemonCard key={curpokemon.id} pokemonData={curpokemon} />
                    ))}
                </ul>
            </div>
        </section>
        </>
    )
}
