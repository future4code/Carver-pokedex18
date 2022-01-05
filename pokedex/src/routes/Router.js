import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/pokedex">
                    <PokedexPage/>
                </Route>

                <Route exact path="/details/:id">    
                    <PokemonDetailPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;