import React from 'react';
import './Navbar.scss';

export const navNames = ['about', 'calendar', 'home', 'membership', 'news', 'partners', 'contact'];

const navList = navNames.map((name) => (
  <li className="list__item" key={name}>
    <a href={`#${name}`}>{name}</a>
  </li>
));

export const Navbar = () => (
  <nav className="nav">
    <div className="nav__nav-container">
      <div className="nav__nav">
        <div className="logo">
          <a href="#home">
            <div className="logo__content"></div>
          </a>
        </div>
        <ul className="list">{navList}</ul>
      </div>
    </div>
  </nav>
);
