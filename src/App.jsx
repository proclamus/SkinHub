import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./components/style.css";

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
