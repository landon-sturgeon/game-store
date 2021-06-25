import React, { Component } from "react";
import { CardListContainer } from "./CardList.styles";
import Card from "../Card/Card.component";
import hangmanBackground from "../../assets/hangman/hangman_screenshot.png";

const cards = [
  {
    title: "Hangman",
    description: "this is a description of card 1",
    route: "/hangman",
    backgroundImg: hangmanBackground,
  },
  {
    title: "Pokedex",
    description: "this is a description of card 2",
    route: "/pokedex",
    backgroundImg: hangmanBackground,
  },
  {
    title: "Test Card 3",
    description: "this is a description of card 3",
    route: "/hangman",
    backgroundImg: { hangmanBackground },
  },
  {
    title: "Test Card 4",
    description: "this is a description of card 4",
    route: "/hangman",
    backgroundImg: { hangmanBackground },
  },
  {
    title: "Test Card 5",
    description: "this is a description of card 5",
    route: "/hangman",
    backgroundImg: { hangmanBackground },
  },
  {
    title: "Test Card 6",
    description: "this is a description of card 6",
    route: "/hangman",
    backgroundImg: { hangmanBackground },
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
            backgroundImg={card.backgroundImg}
          />
        ))}
      </CardListContainer>
    );
  }
}

export default CardList;
