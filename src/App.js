import "./App.css";
import CardList from "./components/CardList/CardList.component";
import NavBar from "./components/NavBar/NavBar.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </BrowserRouter>
      <CardList />
    </React.Fragment>
  );
}

export default App;
