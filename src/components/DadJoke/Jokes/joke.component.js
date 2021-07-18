import React, { Component } from "react";
import { StyledJoke, JokeButtons, JokeText } from "./joke.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Joke extends Component {
  render() {
    return (
      <StyledJoke>
        <JokeButtons>
          <FontAwesomeIcon icon={faArrowUp} onClick={this.props.upvote} />
          <span>{this.props.votes}</span>
          <FontAwesomeIcon icon={faArrowDown} onClick={this.props.downvote} />
        </JokeButtons>
        <JokeText>{this.props.text}</JokeText>
      </StyledJoke>
    );
  }
}

export default Joke;
