import React from "react";
import CardList from "../components/CardList/CardList.component";
import hangmanBackground from "../assets/hangman/hangman_screenshot.png";
import pokedexScreenshot from "../assets/pokemon/pokedex_screenshot.png";
import yahtzeeScreenshot from "../assets/yahtzee/yahtzee_screenshot.png";

const cards = [
  {
    title: "Hangman",
    description:
      "The typical game of hangman (or woman!). Guess the word in 6 tries to win!",
    route: "/hangman",
    backgroundImg: hangmanBackground,
  },
  {
    title: "Pokemon Games",
    description: "Pokemon activities for the young and young at heart!",
    route: "/pokedex",
    backgroundImg: pokedexScreenshot,
  },
  {
    title: "Yahtzee",
    description:
      "Classic game of rolling dice to get specific patterns of dice and win the most points!",
    route: "/yahtzee",
    backgroundImg: yahtzeeScreenshot,
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

function LandingPage() {
  return <CardList cards={cards} />;
}

export default LandingPage;
