import React, { useContext } from "react";
import PokeImagem from "./ImagemPoke";
import {goToDetail} from "../routes/Coordinator"
import { useHistory } from "react-router-dom";
import GlobalContext from "../global/GlobalContext";

const CardPokedex = (props) => {
    const history = useHistory()
    const { setters } = useContext(GlobalContext)

    const onClickRemove = () => {
        if(props.buttonChange === 'Remover da Pokedéx'){
          return setters.removePokeFromPokedex(props.pokename)
        }
    }
    
    return(
        <div>
            <PokeImagem name={props.pokename} />
            <p>{props.name}</p>
            <p>{props.id}</p>

            <div>
                <button onClick={onClickRemove}>{props.buttonChange}</button>
                <button onClick={props.onClickDetail}>Detalhes</button>
            </div>
        </div>)
}

export default CardPokedex;