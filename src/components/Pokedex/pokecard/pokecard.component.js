import axios from "axios";
import React, { Component } from "react";
import { StyledPokecard } from "./pokecard.styles";

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
            return type.type.name;
          }),
          name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
          weight: res.data.weight,
          height: res.data.height,
          sprite: res.data.sprites.front_default,
        });
      });
  }

  render() {
    return (
      <StyledPokecard>
        <h1>{this.state.name}</h1>
        <img src={this.state.sprite} alt={this.props.name} />
        <h3>Type(s): {this.state.types.join(", ")}</h3>
        <h3>{this.state.baseExperience}</h3>
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
            Height: {this.state.height} ft.
          </h3>
          <h3>Weight: {this.state.weight} lbs.</h3>
        </div>
      </StyledPokecard>
    );
  }
}

export default Pokecard;
