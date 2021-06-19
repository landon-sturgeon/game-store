import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { GlobalStyles } from "./global.styles";
import Layout from "./components/Layout/Layout.component";
import Hangman from "./pages/Hangman";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/hangman" element={<Hangman />} />
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
