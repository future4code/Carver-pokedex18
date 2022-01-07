import styled from "styled-components";
import { backgroundCard } from "../constants/colors";

export const PokeCardContainer = styled.div`
  height: 35vh;
  width: 250px;
  margin: 10px;
  display: grid;
  grid-template-rows: 65% 5%;
  
`;

export const ImgContainer = styled.div`
  background: ${backgroundCard};
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const PokeImg = styled.img`
  height: 60%;
`;

export const ButtonsContainer = styled.div`
  
  
  display: flex;
  margin : 20px ;
   

`;


export const TextCard = styled.h3 `

margin: 80px;
margin-top: 15px;
text-align: justify;
text-transform: uppercase;

`
