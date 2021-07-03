import React, { Component } from "react";
import Game from "../../components/Yahtzee/Game/game.component";
import { YahtzeeApp } from "./Yahtzee.styles";

class YahtzeeGame extends Component {
  render() {
    return (
      <YahtzeeApp>
        <Game />
      </YahtzeeApp>
    );
  }
}

export default YahtzeeGame;
