import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brands">
          <h3>
            <Link to="/">Notes</Link>
          </h3>
        </div>
        <div className="navbar-buttons">
          <Link to="/new" className=" btn btn-primary">
            New Note
          </Link>
        </div>
      </nav>
    );
  }
}
