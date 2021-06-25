import React, { Component } from "react";
import Pokecard from "../../components/Pokedex/pokecard/pokecard.component";

class Pokedex extends Component {
  render() {
    return <Pokecard pokemon={"charmander"} />;
  }
}

export default Pokedex;
