import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/Coordinator";
import { useState, useEffect } from "react";
import axios from "axios";
import { ButtonsContainer, ImgWrapper, ImagesContainer, PokeInfosContainer, TitleContainer, MovesContainer, StatsContainer,} from "./StyledPokemonDetailPage";


const PokemonDetailPage = () => {
    const history = useHistory()
    const params = useParams()
    console.log('params', params.name)

    const [pokemon, setPokemon] = useState({})

    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setPokemon(response.data)
               
            })
            .catch((error) => {
                console.log(error);
                console.log('erro ao fazer requisição');
            });
    }, [url]);
    



    return(
        <div>
            <PokeInfosContainer>
            <ButtonsContainer>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>
            <button onClick={() => goToHome(history)}>Home</button>
            </ButtonsContainer>
                                    
            <ImagesContainer>
            {pokemon.sprites && pokemon.sprites.front_default && (<ImgWrapper src={pokemon.sprites.front_default} alt={'pokemon'} />)}
            {pokemon.sprites && pokemon.sprites.back_default && (<ImgWrapper src={pokemon.sprites.back_default} alt={'pokemon'} />)}
            </ImagesContainer>
            
            <MovesContainer>
            <TitleContainer>Principais ataques</TitleContainer>
            
            <p>{pokemon.moves && pokemon.moves[0].move.name && (<p>{pokemon.moves[0].move.name}</p>)}</p>
            <p>{pokemon.moves && pokemon.moves[1].move.name && (<p>{pokemon.moves[1].move.name}</p>)}</p>
            <p>{pokemon.moves && pokemon.moves[2].move.name && (<p>{pokemon.moves[2].move.name}</p>)}</p>
            </MovesContainer>
            <StatsContainer>
            <TitleContainer>Poderes</TitleContainer>
            
            <p><strong>Hp:</strong>{pokemon.stats && pokemon.stats[0].base_stat && (<p>{pokemon.stats[0].base_stat}</p>)}</p>
            <p><strong>Attack:</strong>{pokemon.stats && pokemon.stats[1].base_stat && (<p>{pokemon.stats[1].base_stat}</p>)}</p>
            <p><strong>Defense:</strong>{pokemon.stats && pokemon.stats[2].base_stat && (<p>{pokemon.stats[2].base_stat}</p>)}</p>
            <p><strong>Special-Attack:</strong>{pokemon.stats && pokemon.stats[3].base_stat && (<p>{pokemon.stats[3].base_stat}</p>)}</p>
            <p><strong>Special-defence:</strong>{pokemon.stats && pokemon.stats[4].base_stat && (<p>{pokemon.stats[4].base_stat}</p>)}</p>
            <p><strong>Speed:</strong>{pokemon.stats && pokemon.stats[5].base_stat && (<p>{pokemon.stats[5].base_stat}</p>)}</p>
            </StatsContainer>
            
            </PokeInfosContainer>   
            
        </div>
    )
}

export default PokemonDetailPage;
