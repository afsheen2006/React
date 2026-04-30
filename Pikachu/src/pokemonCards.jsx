
export const PokemonCard =({pokemonData})=>{
    return(
        <li className="pokemon-card"> 
            <figure>
                <img
                  src={
                    pokemonData.sprites?.dream_world?.front_default ||
                    pokemonData.sprites?.other?.['official-artwork']?.front_default ||
                    pokemonData.sprites?.front_default ||
                    "https://via.placeholder.com/96"
                }
  alt={pokemonData.name}
  className="pokemon-image"
/>
<hr />
            </figure>
            <h1 className="pokemon-name">{pokemonData.name}</h1>
            <div className="pokemon-data">
                <p className="pokemon-types">{pokemonData.types.map((type) => type.type.name).join(", ")}</p>
            </div>
            <div className="grid-three-cols">
                <p className="pokemon-info">
                    <span>Height: {pokemonData.height}</span>
                </p>
                <p className="pokemon-info">
                    <span>Weight: {pokemonData.weight}</span>
                </p>
                <p className="pokemon-info">
                    <span>Speed: {pokemonData.stats[5].base_stat}m/s</span>
                </p>
            </div>
        </li>
    )

}