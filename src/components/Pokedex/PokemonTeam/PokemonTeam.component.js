import React, { Component } from "react";
import Pokecard from "../pokecard/pokecard.component";
import {
  StyledPokemonTeam,
  PokedexCardList,
  StyledPokedexWinner,
  StyledPokedexExperience,
  PokecardTitle,
} from "./PokemonTeam.styles";

class PokemonTeam extends Component {
  render() {
    return (
      <StyledPokemonTeam>
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
      </StyledPokemonTeam>
    );
  }
}

export default PokemonTeam;
