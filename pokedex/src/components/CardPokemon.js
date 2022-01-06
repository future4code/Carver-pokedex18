import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PokeImagem from "./ImagemPoke";
import {goToDetail} from "../routes/Coordinator"
/* import GlobalContext from "../../global/GlobalContext.js"; */

function CardPokemon(props) {
  const history = useHistory()
  return (
    <div>
      <PokeImagem name={props.pokename} />
  
      <p>{props.name}</p>
      <p>{props.id}</p>
     
      <div>
        <button>Adicionar</button>
        <button onClick={() => goToDetail(history, props.id)}>Detalhes</button>
        
       
      </div>
    </div>
  );
}

export default CardPokemon;