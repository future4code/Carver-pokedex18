import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToDetail, goToHome } from "../../routes/Coordinator";
import CardPokedex from "../../components/CardPokedex";
import GlobalContext from "../../global/GlobalContext";

const PokedexPage = (props) => {
    const history = useHistory()
    const { states } = useContext(GlobalContext)

    const pokemonsPokedex = states.pokedex.map((pokemon) => {
        return (
            <CardPokedex
            key={pokemon.name}
            pokename={pokemon.name}
            name = {pokemon.name}
            id = {pokemon.id}
            buttonChange = {'Remover da Pokedéx'}
            onClickDetail = {() => goToDetail(history, pokemon)}
          />
        )
    })

    return(
        <div>
            <button onClick={() => goToHome(history)}>Home</button>
            <h1>POKEDEX</h1>
            {pokemonsPokedex.length > 0 ? pokemonsPokedex : <h3>Adicione Pokemons a sua Pokedéx!</h3>}
        </div>
    )
}

export default PokedexPage;