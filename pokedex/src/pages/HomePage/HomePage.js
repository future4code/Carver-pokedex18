import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../routes/Coordinator";
import useRequestData from "../../Hooks/useRequestData";
import CardPokemon from "../../components/CardPokemon";

const HomePage = () => {
    const history = useHistory()
    const [data] = useRequestData({}, `https://pokeapi.co/api/v2/pokemon/`);
    const [pokemonsIniciais, setPokemonsIniciais] = useState()

    useEffect(() => {
        setPokemonsIniciais(data.results)
      }, [data])

    const pokemonArray = pokemonsIniciais && pokemonsIniciais.map((pokemon) => {
        return (
            <CardPokemon
            key={pokemon.name}
            pokename={pokemon.name}
            name = {pokemon.name}
            id = {pokemon.id}
            
          />
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