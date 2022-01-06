import React, { useState } from "react";
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])

    const addPokeToPokedex = (name) => {
        const newPokedex = [...pokedex, name]
        setPokedex(newPokedex)
        alert(`${name} foi adicionado a Pokedéx`)
    } 

    const removePokeFromPokedex = (name) => {
        const newPokedex = pokedex.filter((pokemon)=>{
            return pokemon !== name
        })
        setPokedex(newPokedex)
    } 

    const states = { pokedex }
    const setters = { setPokedex, addPokeToPokedex, removePokeFromPokedex }

    return (
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;