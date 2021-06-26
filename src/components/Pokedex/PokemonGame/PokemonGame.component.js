import axios from "axios";
import React, { Component } from "react";
import Pokedex from "../Pokedex/Pokedex.component";
import { StyledPokemonGame } from "./PokemonGame.styles";

const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

class PokemonGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonRange: [1, 151],
      hand1: [],
      hand2: [],
      hand1Exp: 0,
      hand2Exp: 0,
      takenPokemon: [],
    };
    this.generateHands = this.generateHands.bind(this);
    this.getPokemonNameExp = this.getPokemonNameExp.bind(this);
  }
  state = {};

  getRandomPokemonId() {
    const min = Math.ceil(this.state.pokemonRange[0]);
    const max = Math.floor(this.state.pokemonRange[1]);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async getPokemonNameExp(id) {
    let temp = await axios.get(`${POKE_API}${id}`).then((res) => {
      let name = res.data.name;
      let exp = res.data.base_experience;
      return {
        name: name,
        exp: exp,
      };
    });
    return temp;
  }

  async updatePokeState(handNumber) {
    while (true) {
      let tempId = this.getRandomPokemonId();
      if (this.state.takenPokemon.indexOf(tempId) > -1) {
        continue;
      } else {
        let tempData = await this.getPokemonNameExp(tempId);
        if (handNumber === 1) {
          this.setState({
            hand1: [...this.state.hand1, tempData.name],
            takenPokemon: [...this.state.takenPokemon, tempId],
            hand1Exp: this.state.hand1Exp + tempData.exp,
          });
        } else {
          this.setState({
            hand2: [...this.state.hand2, tempData.name],
            takenPokemon: [...this.state.takenPokemon, tempId],
            hand2Exp: this.state.hand2Exp + tempData.exp,
          });
        }
        break;
      }
    }
  }

  async generateHands() {
    while (this.state.hand2.length <= 3) {
      await this.updatePokeState(2);
    }
    while (this.state.hand1.length < this.state.hand2.length) {
      await this.updatePokeState(1);
    }
  }

  componentDidMount() {
    this.generateHands();
  }

  render() {
    return (
      <StyledPokemonGame>
        <Pokedex
          pokemon={this.state.hand1}
          exp={this.state.hand1Exp}
          isWinner={this.state.hand1Exp > this.state.hand2Exp}
          teamNumber={1}
        />
        <Pokedex
          pokemon={this.state.hand2}
          exp={this.state.hand2Exp}
          isWinner={this.state.hand2Exp > this.state.hand1Exp}
          teamNumber={2}
        />
      </StyledPokemonGame>
    );
  }
}

export default PokemonGame;
