import axios from "axios";
import { useEffect, useState } from "react";
import { GET_POKEMON_NAME } from "../constants/Url";
import { ImgContainer, PokeImg, PokeCardContainer } from "./StyledCardPokemon";

const PokeImagem = (props) => {
    const [pokeImg, setPokeImg] = useState([]);

    const pegaPoke = () => {
        axios
            .get(GET_POKEMON_NAME(props.name))
            .then((resp) => {
                setPokeImg(resp.data.sprites.front_default);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    useEffect(() => {
        pegaPoke();
    }, [props.name]);

    return (
    
    <PokeCardContainer>
    <ImgContainer>
    <PokeImg src={pokeImg} alt={'imagem pokemon'}/>
    </ImgContainer>
    </PokeCardContainer>
    
 

   
    )
};

export default PokeImagem;