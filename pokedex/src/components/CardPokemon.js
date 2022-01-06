import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PokeImagem from "./ImagemPoke";
import {goToDetail} from "../routes/Coordinator"
import GlobalContext from "../global/GlobalContext";

function CardPokemon(props) {
  const history = useHistory()
  const { setters } = useContext(GlobalContext)

  const onClickAdd = () => {
    if(props.buttonChange === 'Adicionar a Pokedéx'){
      return setters.addPokeToPokedex(props.pokename)
    }
  }

  return (
    <div>
      <PokeImagem name={props.pokename} />
      <p>{props.name}</p>
      <p>{props.id}</p>
      <div>
        <button onClick={onClickAdd}>{props.buttonChange}</button>
        <button onClick={() => goToDetail(history, props.name)}>Detalhes</button>
      </div>
    </div>
  );
}

export default CardPokemon;