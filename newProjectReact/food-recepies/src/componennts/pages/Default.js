import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

export default class Default extends React.Component {
  render() {
    return (
      <Header title="error 404" styleClass="default-hero">
        <h4 className="text-light text-uppercase">Page not found</h4>
        <Link className="btn btn-secondary" to="/">
          Return Home
        </Link>
      </Header>
    );
  }
}
