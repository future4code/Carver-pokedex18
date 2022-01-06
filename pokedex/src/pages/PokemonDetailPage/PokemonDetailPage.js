import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/Coordinator";
import useRequestData from "../../Hooks/useRequestData"

const PokemonDetailPage = () => {
    const history = useHistory()
    const params = useParams()
    console.log('params', params.name)
    const pokemon = useRequestData({}, `https://pokeapi.co/api/v2/pokemon/${params.name}`)
    console.log(pokemon)


    return(
        <div>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>
            <button onClick={() => goToHome(history)}>Home</button>
            <h1>Detalhes</h1>
        </div>
    )
}

export default PokemonDetailPage;