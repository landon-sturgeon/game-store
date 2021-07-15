import React, { Component } from "react";
import axios from "axios";
import {
  JokeListContainer,
  JokeListJokesContainer,
} from "./dadJokeList.styles";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    let jokes = [];

    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      jokes.push(res.data.joke);
    }
    this.setState({
      jokes: jokes,
    });
  }

  render() {
    return (
      <JokeListContainer>
        <h1>Dad Jokes</h1>
        <JokeListJokesContainer>
          {this.state.jokes.map((j) => (
            <div>{j}</div>
          ))}
        </JokeListJokesContainer>
      </JokeListContainer>
    );
  }
}

export default JokeList;
