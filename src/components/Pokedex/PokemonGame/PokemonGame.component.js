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
      takenPokemon: [],
      temp: null,
    };
    this.generateHands = this.generateHands.bind(this);
    this.getPokemonName = this.getPokemonName.bind(this);
  }
  state = {};

  getRandomPokemonId() {
    const min = Math.ceil(this.state.pokemonRange[0]);
    const max = Math.floor(this.state.pokemonRange[1]);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async getPokemonName(id) {
    let temp = await axios.get(`${POKE_API}${id}`).then((res) => res.data.name);
    console.log("temp in get pokemon: " + temp);
    return temp;
  }

  async updatePokeState(handNumber) {
    while (true) {
      let tempId = this.getRandomPokemonId();
      if (this.state.takenPokemon.indexOf(tempId) > -1) {
        continue;
      } else {
        let tempName = await this.getPokemonName(tempId);
        if (handNumber === 1) {
          this.setState({
            hand1: [...this.state.hand1, tempName],
            takenPokemon: [...this.state.takenPokemon, tempId],
          });
        } else {
          this.setState({
            hand2: [...this.state.hand2, tempName],
            takenPokemon: [...this.state.takenPokemon, tempId],
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
    console.log(this.state);
  }

  componentDidMount() {
    this.generateHands();
  }

  render() {
    // const hand1 = [];
    // const hand2 = [...this.props.pokemon];

    // while(hand1.length < hand2.length) {
    //   let randIdx = Math.floor(Math.random() * hand2.length);
    //   let randPokemon = hand2.splice(randIdx, 1)[0];
    //   hand1.push(randPokemon);
    // }

    return <StyledPokemonGame>Pokemon Game</StyledPokemonGame>;
  }
}

export default PokemonGame;
