import React, { Component } from "react";
import { StyledDie } from "./die.styles";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.index);
  }
  render() {
    return (
      <StyledDie locked={this.props.locked} onClick={this.handleClick}>
        {this.props.val}
      </StyledDie>
    );
  }
}

export default Die;
