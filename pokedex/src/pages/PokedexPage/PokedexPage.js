import React from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";

const PokedexPage = () => {
    const history = useHistory()

    return(
        <div>
            <button onClick={() => goToHome(history)}>Home</button>
            <h1>POKEDEX</h1>
        </div>
    )
}

export default PokedexPage;