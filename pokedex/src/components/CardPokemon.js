import React, { useContext } from "react";
import PokeImagem from "./ImagemPoke";
/* import GlobalContext from "../../global/GlobalContext.js"; */

function CardPokemon(props) {
  return (
    <div>
      <PokeImagem name={props.pokename} />
      <div>
        <button>Adicionar</button>
        <button>Detalhes</button>
      </div>
    </div>
  );
}

export default CardPokemon;