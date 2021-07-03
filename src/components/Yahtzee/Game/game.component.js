import React, { Component } from "react";
import {
  StyledYahtzeeGame,
  YahtzeeAppTitle,
  GameHeader,
  GameDiceSection,
} from "./game.styles";
import Dice from "../Dice/dice.component";

class Game extends Component {
  render() {
    return (
      <StyledYahtzeeGame>
        <GameHeader>
          <YahtzeeAppTitle>Yahtzee!</YahtzeeAppTitle>
          <GameDiceSection>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
            />
          </GameDiceSection>
        </GameHeader>
      </StyledYahtzeeGame>
    );
  }
}

export default Game;
