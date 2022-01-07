import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PokeImagem from "./ImagemPoke";
import {goToDetail} from "../routes/Coordinator"
import GlobalContext from "../global/GlobalContext";
import {PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer} from "../components/StyledCardPokemon"

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
      
      <ButtonsContainer>
        <button onClick={onClickAdd}>{props.buttonChange}</button>
        <button onClick={() => goToDetail(history, props.name)}> Ver Detalhes</button>
      </ButtonsContainer>
      </div>
  );
}

export default CardPokemon;

