import React, { Component } from "react";
import JokeList from "../../components/DadJoke/DadJokeList/dadJokeList.component";
import { StyledDadJokeViewer } from "./dadJokeViewer.styles";

class DadJokeViewer extends Component {
  render() {
    return (
      <StyledDadJokeViewer>
        <JokeList />
      </StyledDadJokeViewer>
    );
  }
}

export default DadJokeViewer;
