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
import ScoreTable from "../ScoreTable/scoretable.component";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }).map((d) => 5),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      rolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
  }

  componentDidMount() {
    this.animateRoll();
  }

  animateRoll() {
    this.setState(
      {
        rolling: true,
      },
      () => {
        setTimeout(this.roll, 1000);
      }
    );
  }

  roll(e) {
    // roll dice whose indexes are in reroll
    this.setState((st) => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false,
    }));
  }

  toggleLocked(index) {
    // toggle whether index is in locked or not
    if (this.state.rollsLeft > 0 && !this.state.rolling) {
      this.setState((st) => ({
        locked: [
          ...st.locked.slice(0, index),
          !st.locked[index],
          ...st.locked.slice(index + 1),
        ],
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState((st) => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }));
    this.animateRoll();
  }

  displayRollInfo(rollNumber) {
    const messages = [
      "0 Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round",
    ];
    return messages[rollNumber];
  }

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
              disabled={this.state.rollsLeft === 0}
              rolling={this.state.rolling}
            />
            <GameButtonWrapper>
              <GameRerollButton
                disabled={
                  this.state.locked.every((x) => x) ||
                  this.state.rollsLeft === 0
                }
                onClick={this.animateRoll}
              >
                {this.displayRollInfo(this.state.rollsLeft)}
              </GameRerollButton>
            </GameButtonWrapper>
          </GameDiceSection>
        </GameHeader>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </StyledYahtzeeGame>
    );
  }
}

export default Game;
