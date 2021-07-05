import React, { Component } from "react";
import {
  StyledYahtzeeGame,
  YahtzeeAppTitle,
  GameHeader,
  GameDiceSection,
  GameButtonWrapper,
  GameRerollButton,
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
            <GameButtonWrapper>
              <GameRerollButton
                disabled={this.state.locked.every((x) => x)}
                onClick={this.roll}
              >
                {this.state.rollsLeft} Rerolls left
              </GameRerollButton>
            </GameButtonWrapper>
          </GameDiceSection>
        </GameHeader>
      </StyledYahtzeeGame>
    );
  }
}

export default Game;
