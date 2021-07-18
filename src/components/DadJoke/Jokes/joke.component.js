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

class Joke extends Component {
  render() {
    return (
      <StyledJoke>
        <JokeButtons>
          <FontAwesomeIcon
            icon={faArrowUp}
            onClick={this.props.upvote}
            style={{ fontSize: "1.5rem", margin: "10px", cursor: "pointer" }}
          />
          <NumberVotesSpan>{this.props.votes}</NumberVotesSpan>
          <FontAwesomeIcon
            icon={faArrowDown}
            onClick={this.props.downvote}
            style={{ fontSize: "1.5rem", margin: "10px", cursor: "pointer" }}
          />
        </JokeButtons>
        <JokeText>{this.props.text}</JokeText>
        <SmileyContainer>
          <i className="em em-rolling_on_the_floor_laughing"></i>
        </SmileyContainer>
      </StyledJoke>
    );
  }
}

export default Joke;
