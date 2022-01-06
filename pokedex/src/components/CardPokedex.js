import React, { useContext } from "react";
import PokeImagem from "./ImagemPoke";
import GlobalContext from "../global/GlobalContext";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";

const CardPokedex = (props) => {
    const { setters } = useContext(GlobalContext)

    const onClickRemove = () => {
        if(props.buttonChange === 'Remover da Pokedéx'){
          return setters.removePokeFromPokedex(props.pokename)
        }
    }
    
    return(
        <div key={props.name}>
            <PokeImagem name={props.pokename} />
            <p>{props.pokename}</p>
            <div>
                <button onClick={onClickRemove}>{props.buttonChange}</button>
                <button onClick={props.onClickDetail}>Detalhes</button>
            </div>
        </div>)
}

export default CardPokedex;