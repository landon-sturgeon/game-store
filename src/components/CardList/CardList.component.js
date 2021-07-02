import React, { Component } from "react";
import { CardListContainer } from "./CardList.styles";
import Card from "../Card/Card.component";

class CardList extends Component {
  render() {
    return (
      <CardListContainer>
        {this.props.cards.map((card, i) => (
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
