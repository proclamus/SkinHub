// Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav id="myNavBar" class="navbar">
      <div class="logoNavBar">
        <a>
          <img
            src={require("../Assets/Logo/Logo_NoBackground_Black.png")}
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
