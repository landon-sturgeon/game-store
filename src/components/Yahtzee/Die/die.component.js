import React, { Component } from "react";
import { StyledDie } from "./die.styles";

class Die extends Component {
  render() {
    return (
      <StyledDie locked={this.props.locked} onClick={this.props.handleClick}>
        {this.props.val}
      </StyledDie>
    );
  }
}

export default Die;
