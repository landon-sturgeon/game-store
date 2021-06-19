import React, { Component } from "react";
import { CardListContainer } from "./CardList.styles";
import Card from "../Card/Card.component";

const cards = [
  {
    title: "Hangman",
    description: "this is a description of card 1",
    route: "/hangman",
  },
  {
    title: "Test Card 2",
    description: "this is a description of card 2",
    route: "/hangman",
  },
  {
    title: "Test Card 3",
    description: "this is a description of card 3",
    route: "/hangman",
  },
  {
    title: "Test Card 4",
    description: "this is a description of card 4",
    route: "/hangman",
  },
  {
    title: "Test Card 5",
    description: "this is a description of card 5",
    route: "/hangman",
  },
  {
    title: "Test Card 6",
    description: "this is a description of card 6",
    route: "/hangman",
  },
];
class CardList extends Component {
  render() {
    return (
      <CardListContainer>
        {cards.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            description={card.description}
            route={card.route}
          />
        ))}
      </CardListContainer>
    );
  }
}

export default CardList;
