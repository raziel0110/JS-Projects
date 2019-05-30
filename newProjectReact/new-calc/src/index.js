import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./Components/Board";
import "./index.css";
class App extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
