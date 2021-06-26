import React, { Component } from "react";
import Pokecard from "../pokecard/pokecard.component";
import {
  StyledPokedex,
  PokedexCardList,
  StyledPokedexWinner,
  StyledPokedexExperience,
  PokecardTitle,
} from "./Pokedex.styles";

class Pokedex extends Component {
  render() {
    return (
      <StyledPokedex>
        <PokecardTitle>Team {this.props.teamNumber}</PokecardTitle>
        <StyledPokedexExperience>
          Team Experience: {this.props.exp}
        </StyledPokedexExperience>
        <StyledPokedexWinner isWinner={this.props.isWinner}>
          {this.props.isWinner ? "WINNER!" : "LOSER"}
        </StyledPokedexWinner>
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
