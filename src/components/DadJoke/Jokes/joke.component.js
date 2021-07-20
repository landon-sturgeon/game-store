import React, { Component } from "react";
import {
  StyledJoke,
  JokeButtons,
  JokeText,
  NumberVotesSpan,
  SmileyContainer,
} from "./joke.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const jokeColors = [
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#f44336",
];

const emojis = [
  "em em-rolling_on_the_floor_laughing",
  "em em-laughing",
  "em em-smiley",
  "em em-slightly_smiling_face",
  "em em-neutral_face",
  "em em-confused",
  "em em-angry",
];
class Joke extends Component {
  getColor() {
    if (this.props.votes >= 15) {
      return jokeColors[0];
    } else if (this.props.votes >= 12) {
      return jokeColors[1];
    } else if (this.props.votes >= 9) {
      return jokeColors[2];
    } else if (this.props.votes >= 6) {
      return jokeColors[3];
    } else if (this.props.votes >= 3) {
      return jokeColors[4];
    } else if (this.props.votes >= 0) {
      return jokeColors[5];
    } else {
      return jokeColors[6];
    }
  }

  getEmoji() {
    if (this.props.votes >= 15) {
      return emojis[0];
    } else if (this.props.votes >= 12) {
      return emojis[1];
    } else if (this.props.votes >= 9) {
      return emojis[2];
    } else if (this.props.votes >= 6) {
      return emojis[3];
    } else if (this.props.votes >= 3) {
      return emojis[4];
    } else if (this.props.votes >= 0) {
      return emojis[5];
    } else {
      return emojis[6];
    }
  }

  render() {
    return (
      <StyledJoke>
        <JokeButtons>
          <FontAwesomeIcon
            icon={faArrowUp}
            onClick={this.props.upvote}
            style={{ fontSize: "1.5rem", margin: "10px", cursor: "pointer" }}
          />
          <NumberVotesSpan style={{ borderColor: this.getColor() }}>
            {this.props.votes}
          </NumberVotesSpan>
          <FontAwesomeIcon
            icon={faArrowDown}
            onClick={this.props.downvote}
            style={{ fontSize: "1.5rem", margin: "10px", cursor: "pointer" }}
          />
        </JokeButtons>
        <JokeText>{this.props.text}</JokeText>
        <SmileyContainer>
          <i className={this.getEmoji()}></i>
        </SmileyContainer>
      </StyledJoke>
    );
  }
}

export default Joke;
