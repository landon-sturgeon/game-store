import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { GlobalStyles } from "./global.styles";
import Layout from "./components/Layout/Layout.component";
import Hangman from "./pages/Hangman/Hangman.component";
import LandingPage from "./pages/LandingPage";
import PokedexLandingComponent from "./pages/Pokedex/PokedexLanding.component";
import PokemonSearch from "./components/Pokedex/PokemonSearch/PokemonSearch.component";
import PokemonGame from "./components/Pokedex/PokemonGame/PokemonGame.component";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/hangman" element={<Hangman />} />
            <Route path="/pokedex" element={<PokedexLandingComponent />} />
            <Route path="/pokedex/game" element={<PokemonGame />} />
            <Route path="/pokedex/search" element={<PokemonSearch />} />
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
