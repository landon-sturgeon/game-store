import React, { Component } from "react";
import { Container, CardSide, Content, CardForm } from "./CardList.styles";

class CardList extends Component {
  render() {
    return (
      <Container>
        <CardSide front>
          <Content>
            <h1>Hakkam Abdullah</h1>
            <p>
              I am a graphic designer and art director. I am as well specialised
              in front end web design, user experience and creating identities.
              Throughout my career, I have worked with companies of all shapes
              and sizes that enriched my experience
            </p>
          </Content>
        </CardSide>
        <CardSide>
          <Content>
            <h1>Contact Me</h1>
            <CardForm>
              <label>Your Name :</label>
              <input type="text" placeholder="Omar Khattab" />
              <label>Your E-mail :</label>
              <input type="text" placeholder="Example@mail.com" />
              <label>Your message :</label>
              <textarea placeholder="The Subject"></textarea>
              <input type="submit" value="Done" />
            </CardForm>
          </Content>
        </CardSide>
      </Container>
    );
  }
}

export default CardList;
