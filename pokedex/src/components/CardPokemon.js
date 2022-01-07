import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PokeImagem from "./ImagemPoke";
import {goToDetail} from "../routes/Coordinator"
import GlobalContext from "../global/GlobalContext";
import {TextCard, ButtonsContainer, PokeCardContainer} from "../components/StyledCardPokemon"

function CardPokemon(props) {
  const history = useHistory()
  const { setters } = useContext(GlobalContext)

  const onClickAdd = () => {
    if(props.buttonChange === 'Adicionar a Pokedéx'){
      return setters.addPokeToPokedex(props.pokename)
    }
  }

  return (
    
      <PokeCardContainer>
      <PokeImagem name={props.pokename} />
      <TextCard>{props.pokename}</TextCard>
           
      
      <ButtonsContainer>
        <button onClick={onClickAdd}>{props.buttonChange}</button>
        <button onClick={() => goToDetail(history, props.name)}> Ver Detalhes</button>
      </ButtonsContainer>
      </PokeCardContainer>
  );
}

export default CardPokemon;

