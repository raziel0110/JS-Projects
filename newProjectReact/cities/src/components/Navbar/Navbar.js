import React from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tour" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link active">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Cities
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
