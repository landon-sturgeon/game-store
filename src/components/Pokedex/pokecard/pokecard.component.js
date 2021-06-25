import axios from "axios";
import React, { Component } from "react";

class Pokecard extends Component {
  state = {
    baseExperience: 0,
    types: [],
    name: "",
    weight: 0,
    height: 0,
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
          name: res.data.name,
          weight: res.data.weight,
          height: res.data.height,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>POKECARD!</h1>
        <h3>{this.state.name}</h3>
        <h3>{this.state.baseExperience}</h3>
        <h3>
          {this.state.types.map((type, i) => (
            <p key={i}>{type}</p>
          ))}
        </h3>
        <h3>{this.state.weight}</h3>
        <h3>{this.state.height}</h3>
      </div>
    );
  }
}

export default Pokecard;
