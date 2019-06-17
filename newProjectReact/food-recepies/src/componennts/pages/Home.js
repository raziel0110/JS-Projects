import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header title="amazing recepies">
          <Link
            to="recepies"
            className="btn btn-secondary btn-lg mt-3 text-uppercase "
          >
            Recepies
          </Link>
        </Header>
      </div>
    );
  }
}

export default Home;
