import React, { Component } from "react";
import Pokecard from "../../components/Pokedex/pokecard/pokecard.component";
import { StyledPokedex, PokedexCardList } from "./Pokedex.styles";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      "charmander",
      "squirtle",
      "metapod",
      "butterfree",
      "pikachu",
      "jigglypuff",
      "gengar",
      "eevee",
    ],
  };

  render() {
    return (
      <StyledPokedex>
        <h1>Pokedex!</h1>
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
