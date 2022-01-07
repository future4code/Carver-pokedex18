import React, { useContext } from "react";
import PokeImagem from "./ImagemPoke";
import GlobalContext from "../global/GlobalContext";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
import { ButtonsContainer } from "./StyledCardPokemon";

const CardPokedex = (props) => {
    const { setters } = useContext(GlobalContext)

    const onClickRemove = () => {
        if(props.buttonChange === 'Remover da Pokedéx'){
          return setters.removePokeFromPokedex(props.pokename)
        }
    }
    
    return(

       <div>                   
        <div key={props.name}/>
       
         
            <PokeImagem name={props.pokename}/>
            
       
            <p>{props.pokename}</p>
            <ButtonsContainer>
                <button onClick={onClickRemove}>{props.buttonChange}</button>
                <button onClick={props.onClickDetail}>Detalhes</button>
            </ButtonsContainer>
        </div>
    )
        
}

export default CardPokedex;