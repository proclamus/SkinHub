import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {

  const listLinks = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Weapons',
      link: '/weapons'
    },
    {
      name: 'Skins',
      link: '/skins'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
  ]

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
        {listLinks.map((i, index) => {
          return ( 
            <li>
            <Link key={index} class="buttonNavBar" to={i.link}>
              {i.name}
            </Link>
          </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Header;
