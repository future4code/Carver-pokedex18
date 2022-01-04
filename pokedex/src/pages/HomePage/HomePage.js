import React from "react";
import { useHistory } from "react-router-dom";
import Pokemons from "../../APIS/useRequestData";
import { goToPokedex } from "../../routes/Coordinator";

const HomePage = () => {
    const history = useHistory()
    const pokemons = Pokemons()
    console.log(pokemons)

    const pokemonArray = pokemons && pokemons.map((pokemon) => {
        return (
            <div key={pokemon.id}>
               <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <p>{pokemon.name}</p>
            </div>
        )
    })

    return(
        <div>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>
            <h1>POKELIST</h1>
            {pokemonArray}
        </div>
    )
}

export default HomePage;