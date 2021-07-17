import React, { Component } from "react";
import axios from "axios";
import {
  JokeListContainer,
  JokeListJokesContainer,
  JokeListSidebar,
  JokeListTitle,
  JokeListGetMoreButton,
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
        <JokeListSidebar>
          <JokeListTitle>
            <span>Dad</span> Jokes
          </JokeListTitle>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <JokeListGetMoreButton>New Jokes</JokeListGetMoreButton>
        </JokeListSidebar>
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
