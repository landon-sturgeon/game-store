import React from "react";
import CardList from "../../components/CardList/CardList.component";
import pokedexScreenshot from "../../assets/pokemon/pokedex_screenshot.png";
import pokedexGameScreenshot from "../../assets/pokemon/pokegame_screenshot.png";

const cards = [
  {
    title: "Pokedex",
    description: "Search for your favorite Pokemon!",
    route: "/pokedex/search",
    backgroundImg: pokedexScreenshot,
  },
  {
    title: "Pokemon Battle!",
    description: "Randomly generate a team of 4 and see who wins!",
    route: "/pokedex/game",
    backgroundImg: pokedexGameScreenshot,
  },
];

function PokedexLandingComponent() {
  return <CardList cards={cards} />;
}

export default PokedexLandingComponent;
