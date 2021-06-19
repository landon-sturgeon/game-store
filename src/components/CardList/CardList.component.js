import React, { Component } from "react";
import { CardListContainer } from "./CardList.styles";
import Card from "../Card/Card.component";

const cards = [
  {
    title: "Test Card 1",
    description:
      "this is a description of card 1, this is a description of card 1, this is a description of card 1, this is a description of card 1, this is a description of card 1, this is a description of card 1, this is a description of card 1,",
  },
  { title: "Test Card 2", description: "this is a description of card 2" },
  { title: "Test Card 3", description: "this is a description of card 3" },
  { title: "Test Card 4", description: "this is a description of card 4" },
  { title: "Test Card 5", description: "this is a description of card 5" },
  { title: "Test Card 6", description: "this is a description of card 6" },
];
class CardList extends Component {
  render() {
    return (
      <CardListContainer>
        {cards.map((card, i) => (
          <Card key={i} title={card.title} description={card.description} />
        ))}
      </CardListContainer>
    );
  }
}

export default CardList;