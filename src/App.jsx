import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import "./style.css";

function App() {
  return (
    <body>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </body>
  );
}

export default App;
