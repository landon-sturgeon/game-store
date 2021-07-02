import axios from "axios";
import React, { Component } from "react";
import { StyledPokecard, StyledPokemonImg } from "./pokecard.styles";

const POKE_IMG_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const padToThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

class Pokecard extends Component {
  state = {
    baseExperience: 0,
    types: [],
    name: "",
    weight: 0,
    height: 0,
    sprite: "",
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}`)
      .then((res) => {
        this.setState({
          baseExperience: res.data.base_experience,
          types: res.data.types.map((type) => {
            return (
              type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
            );
          }),
          name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
          weight: res.data.weight / 10,
          height: res.data.height * 10,
          img: `${POKE_IMG_API}${padToThree(res.data.id)}.png`,
        });
      });
  }

  render() {
    return (
      <StyledPokecard>
        <h1>{this.state.name}</h1>
        <StyledPokemonImg>
          <img src={this.state.img} alt={this.props.name} />
        </StyledPokemonImg>
        <h3>Type(s): {this.state.types.join(", ")}</h3>
        <h3>Base Experience: {this.state.baseExperience}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ marginRight: "20px" }}>
            Height: {this.state.height} cm
          </h3>
          <h3>Weight: {this.state.weight} kg</h3>
        </div>
      </StyledPokecard>
    );
  }
}

export default Pokecard;
