import React from 'react';
import './Navbar.css';

// Navbar Component
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1><span>PSR PencilArts</span></h1>
        <img src="/pics/pencil.png"  alt="logo"></img>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  };
export default Navbar;  