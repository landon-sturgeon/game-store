import React, { Component } from "react";
import Pokecard from "../pokecard/pokecard.component";
import { StyledPokedex, PokedexCardList } from "./Pokedex.styles";

class Pokedex extends Component {
  render() {
    return (
      <StyledPokedex>
        <h1>Pokedex!</h1>
        <h2>Team Experience: {this.props.exp}</h2>
        <h3>{this.props.isWinner ? "WINNER!" : "LOSER"}</h3>
        <PokedexCardList>
          {this.props.pokemon.map((pokemon) => (
            <Pokecard key={pokemon} pokemon={pokemon} />
          ))}
        </PokedexCardList>
      </StyledPokedex>
    );
  }
}

export default Pokedex;
