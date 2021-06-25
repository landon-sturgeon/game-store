import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { GlobalStyles } from "./global.styles";
import Layout from "./components/Layout/Layout.component";
import Hangman from "./pages/Hangman/Hangman.component";
import LandingPage from "./pages/LandingPage";
import Pokedex from "./pages/Pokedex/Pokedex.component";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/hangman" element={<Hangman />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
