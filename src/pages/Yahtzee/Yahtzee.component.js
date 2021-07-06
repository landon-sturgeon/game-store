import React, { Component } from "react";
import Game from "../../components/Yahtzee/Game/game.component";
import { YahtzeeApp, YahtzeeAppContainer } from "./Yahtzee.styles";

class YahtzeeGame extends Component {
  render() {
    return (
      <YahtzeeAppContainer>
        <YahtzeeApp>
          <Game />
        </YahtzeeApp>
      </YahtzeeAppContainer>
    );
  }
}

export default YahtzeeGame;
