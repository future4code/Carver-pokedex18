import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex, goToHome } from "../../routes/Coordinator";
import useRequestData from "../../Hooks/useRequestData";
import CardPokemon from "../../components/CardPokemon";
import GlobalContext from "../../global/GlobalContext";
import Header from "../../constants/Header";


const HomePage = (props) => {
    const history = useHistory()
    const [data] = useRequestData({}, `https://pokeapi.co/api/v2/pokemon/`);
    const [pokemonsIniciais, setPokemonsIniciais] = useState()
    const { states } = useContext(GlobalContext)

    useEffect(() => {
        setPokemonsIniciais(data.results)
    }, [data])

    const pokemonArray = pokemonsIniciais && pokemonsIniciais
    .filter((pokemon)=>!states.pokedex.includes(pokemon.name))
    .map((pokemon) => {
        return (
            <CardPokemon
            key={pokemon.name}
            pokename={pokemon.name}
            name = {pokemon.name}
            id = {pokemon.id}
            buttonChange = {'Adicionar a Pokedéx'}
          />
        )
    })

    return(
              <div>
              <Header
        title={"Pokédex"}
        leftButtonFunction={() => goToHome(history)}
              />
      
             </div>,
        
        
        <div>         
        
           <button onClick={() => goToPokedex(history)}>Ir para Pokedex</button>
            
            <h1>POKELIST</h1>
            {pokemonArray}
            
        </div>
    )
}

export default HomePage;