import React, { Component } from "react";
import { StyledDice } from "./dice.styles";
import Die from "../Die/die.component";

class Dice extends Component {
  render() {
    return (
      <StyledDice>
        {this.props.dice.map((die, index) => (
          <Die
            handleClick={this.props.handleClick}
            val={die}
            locked={this.props.locked[index]}
            index={index}
            key={index}
          />
        ))}
      </StyledDice>
    );
  }
}

export default Dice;
