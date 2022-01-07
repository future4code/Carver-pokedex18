import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/Coordinator";
import { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetailPage = () => {
    const history = useHistory()
    const params = useParams()
    console.log('params', params.name)

    const [pokemon, setPokemon] = useState({})

    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data)
                setPokemon(response.data)
               
            })
            .catch((error) => {
                console.log(error);
                console.log('erro ao fazer requisição');
            });
    }, [url]);
    console.log('pokemon objeto inteiro', pokemon)



    return(
        <div>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>
            <button onClick={() => goToHome(history)}>Home</button>
            <h1>Detalhes</h1>   
            {pokemon.name && <h1>{pokemon.name}</h1>}
            {pokemon.sprites && pokemon.sprites.front_default && (<img src={pokemon.sprites.front_default} alt={'pokemon'} />)}
            {pokemon.sprites && pokemon.sprites.back_default && (<img src={pokemon.sprites.back_default} alt={'pokemon'} />)}
            <h2>Moves:</h2>
            <p>{pokemon.moves && pokemon.moves[0].move.name && (<p>{pokemon.moves[0].move.name}</p>)}</p>
            <p>{pokemon.moves && pokemon.moves[1].move.name && (<p>{pokemon.moves[1].move.name}</p>)}</p>
            <p>{pokemon.moves && pokemon.moves[2].move.name && (<p>{pokemon.moves[2].move.name}</p>)}</p>
            <h2>Status</h2>
            <p>Attack:{pokemon.stats && pokemon.stats[0].base_stat && (<p>{pokemon.stats[0].base_stat}</p>)}</p>
            <p>Attack:{pokemon.stats && pokemon.stats[1].base_stat && (<p>{pokemon.stats[1].base_stat}</p>)}</p>
            <p>Defense:{pokemon.stats && pokemon.stats[2].base_stat && (<p>{pokemon.stats[2].base_stat}</p>)}</p>
            <p>Special-Attack:{pokemon.stats && pokemon.stats[3].base_stat && (<p>{pokemon.stats[3].base_stat}</p>)}</p>
            <p>Special-defence:{pokemon.stats && pokemon.stats[4].base_stat && (<p>{pokemon.stats[4].base_stat}</p>)}</p>
            <p>Speed:{pokemon.stats && pokemon.stats[5].base_stat && (<p>{pokemon.stats[5].base_stat}</p>)}</p>
                
            
        </div>
    )
}

export default PokemonDetailPage;