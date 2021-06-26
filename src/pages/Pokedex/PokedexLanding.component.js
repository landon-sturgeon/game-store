import React from "react";
import { StyledPokedexLanding } from "./PokedexLanding.styles";
import { Link } from "react-router-dom";

function PokedexLandingComponent() {
  return (
    <StyledPokedexLanding>
      <h1>Pokedex Landing!</h1>
      <Link to="/pokedex/search">
        <button>PokeSearch</button>
      </Link>
      <Link to="/pokedex/game">
        <button>PokeGame</button>
      </Link>
    </StyledPokedexLanding>
  );
}

export default PokedexLandingComponent;
