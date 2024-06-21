import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav id="myNavBar" class="navbar">
      <div class="logoNavBar">
        <a href="/">
          <img
            src={require("../assets/logo/LogoGif 1.png")}
            alt="Logo"
          ></img>
        </a>
      </div>
      <ul id="optionsNavBar" class="optionsNavBar">
        <li>
          <Link class="buttonNavBar" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link class="buttonNavBar" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link class="buttonNavBar" to="/Weapons">
            Weapons
          </Link>
        </li>
        <li>
          <Link class="buttonNavBar" to="/Skins">
            Skins
          </Link>
        </li>
        <li>
          <Link class="buttonNavBar" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
