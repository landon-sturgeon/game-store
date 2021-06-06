import React, { Component } from "react";
import { Container, CardSide, Content, CardForm } from "./Card.styles";

class Card extends Component {
  render() {
    return (
      <Container>
        <CardSide front>
          <Content>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
          </Content>
        </CardSide>
        <CardSide>
          <Content>
            <h1>Contact Me</h1>
            <CardForm>
              <label>Your Name: </label>
              <input type="text" placeholder="Enter Name Here" />
              <label>Your E-mail: </label>
              <input type="text" placeholder="Enter E-mail Here" />
              <label>Your message: </label>
              <textarea placeholder="Enter message here"></textarea>
              <input type="submit" value="Done" />
            </CardForm>
          </Content>
        </CardSide>
      </Container>
    );
  }
}

export default Card;
