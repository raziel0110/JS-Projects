import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar">
        <Link to="/">Streamer</Link>
      </div>

      <div className="navbar" id="nav-bar">
        <div className="navbar">
          <Link to="/">All Streams</Link>
        </div>
        <div className="navbar">
          <GoogleAuth />
        </div>
      </div>
    </nav>
  );
};

export default Header;
