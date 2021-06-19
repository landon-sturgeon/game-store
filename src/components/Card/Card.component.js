import React from "react";
import { Link } from "react-router-dom";
import { Container, CardSide, Content, CardForm } from "./Card.styles";

function Card({ title, description, route }) {
  return (
    <Link to={route}>
      <Container>
        <CardSide front>
          <Content>
            <h1 style={{ marginTop: "75%" }}>{title}</h1>
          </Content>
        </CardSide>
        <CardSide>
          <Content>
            <h1>Contact Me</h1>
            <CardForm>
              <p>{description}</p>
            </CardForm>
          </Content>
        </CardSide>
      </Container>
    </Link>
  );
}

export default Card;
