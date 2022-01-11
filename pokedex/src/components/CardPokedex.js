import React, { useContext } from "react";
import PokeImagem from "./ImagemPoke";
import GlobalContext from "../global/GlobalContext";
import { ButtonsContainer, TextCard, PokeCardContainer } from "./StyledCardPokemon";
import {PokedexCardContainer} from "./StyledCardPokedex"

const CardPokedex = (props) => {
    const { setters } = useContext(GlobalContext)

    const onClickRemove = () => {
        if(props.buttonChange === 'Remover da Pokedéx'){
          return setters.removePokeFromPokedex(props.pokename)
        }
    }
    
    return(

       <PokedexCardContainer>                   
        <div key={props.name}/>
       
         
            <PokeImagem name={props.pokename}/>
            
       
            <ButtonsContainer>
                <button onClick={onClickRemove}>{props.buttonChange}</button>
                <button onClick={props.onClickDetail}>Detalhes</button>
            </ButtonsContainer>
        </PokedexCardContainer>
    )
        
}

export default CardPokedex;