import React, { Component } from "react";
import axios from "axios";
import uuid from "react-uuid";
import {
  JokeListContainer,
  JokeListJokesContainer,
  JokeListSidebar,
  JokeListTitle,
  JokeListGetMoreButton,
} from "./dadJokeList.styles";
import Joke from "../Jokes/joke.component";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
    };
    this.handleVote = this.handleVote.bind(this);
  }

  async getJokes() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({
      jokes: jokes,
    });
    window.localStorage.setItem("jokes", JSON.stringify(jokes));
  }

  async componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  handleVote(id, delta) {
    this.setState((st) => ({
      jokes: st.jokes.map((j) =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      ),
    }));
  }

  render() {
    return (
      <JokeListContainer>
        <JokeListSidebar>
          <JokeListTitle>
            <span>Dad</span> Jokes
          </JokeListTitle>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt={"smiley-face-icon"}
          />
          <JokeListGetMoreButton>New Jokes</JokeListGetMoreButton>
        </JokeListSidebar>
        <JokeListJokesContainer>
          {this.state.jokes.map((j) => (
            <Joke
              key={j.id}
              votes={j.votes}
              text={j.text}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </JokeListJokesContainer>
      </JokeListContainer>
    );
  }
}

export default JokeList;
