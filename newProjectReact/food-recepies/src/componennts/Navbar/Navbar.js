import React from "react";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <NavLink to="/">
        <img src={logo} alt="logo" className="navbar-brand" />
      </NavLink>
      <div className="collaplse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="nav-link" to="/recepies">
              Recepies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
