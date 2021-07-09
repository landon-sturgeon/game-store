import React, { Component } from "react";
import { StyledDie } from "./die.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

class Die extends Component {
  static defaultProps = {
    numberWords: [
      faDiceOne,
      faDiceTwo,
      faDiceThree,
      faDiceFour,
      faDiceFive,
      faDiceSix,
    ],
    val: 5,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.index);
  }

  render() {
    return (
      <StyledDie
        locked={this.props.locked}
        disabled={this.props.disabled}
        rolling={this.props.rolling}
      >
        <FontAwesomeIcon
          icon={this.props.numberWords[this.props.val - 1]}
          onClick={this.handleClick}
        />
      </StyledDie>
    );
  }
}

export default Die;
