import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../routes/Coordinator";
import useRequestData from "../../Hooks/useRequestData";

const HomePage = () => {
    const history = useHistory()
    const pokemons= useRequestData('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',{})

    console.log(pokemons)

    const pokemonArray = pokemons.results?.map((pokemon) => {
        return (
            <div key={pokemon.name}>
               <img src={pokemon.sprites && pokemon.sprites.front_default} alt={pokemon.name && pokemon.name}/>
                <p>{pokemon.name}</p>
                <button>Adicionar</button>
                <button>Detalhes</button>
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