import react from "react";
import { HeaderContainer } from "./StyledHeader";
import {useHistory} from "react-router-dom";



function Header(props) {
    return (
      <HeaderContainer>
        <h1>Pokedex</h1>
      </HeaderContainer>
    );
  }


  export default Header

