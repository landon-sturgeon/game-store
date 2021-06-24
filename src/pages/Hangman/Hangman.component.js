import React, { Component } from "react";
import img0 from "../../assets/hangman/0.jpg";
import img1 from "../../assets/hangman/1.jpg";
import img2 from "../../assets/hangman/2.jpg";
import img3 from "../../assets/hangman/3.jpg";
import img4 from "../../assets/hangman/4.jpg";
import img5 from "../../assets/hangman/5.jpg";
import img6 from "../../assets/hangman/6.jpg";
import { randomWord } from "../../assets/hangman/words";

import {
  HangmanAppContainer,
  HangmanComponentsContainer,
  HangmanWord,
  HangmanButtons,
} from "./Hangman.styles";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = { numberWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  handleGuess(event) {
    let letter = event.target.value;
    this.setState((state) => ({
      guessed: state.guessed.add(letter),
      numberWrong: state.numberWrong + (state.answer.includes(letter) ? 0 : 1),
    }));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  render() {
    let gameOver = this.state.numberWrong >= this.props.maxWrong;
    const altText = `${this.state.numberWrong}/${this.props.maxWrong} guesses`;
    return (
      <HangmanAppContainer>
        <HangmanComponentsContainer>
          <h1>Hangman</h1>
          <img src={this.props.images[this.state.numberWrong]} alt={altText} />
          <p>Number Wrong Guesses: {this.state.numberWrong} out of 6</p>
          <HangmanWord>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </HangmanWord>
          <HangmanButtons>
            {!gameOver
              ? this.generateButtons()
              : `You lose. The answer was ${this.state.answer}`}
          </HangmanButtons>
        </HangmanComponentsContainer>
      </HangmanAppContainer>
    );
  }
}

export default Hangman;
