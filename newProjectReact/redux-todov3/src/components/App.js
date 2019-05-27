import React, { Component } from "react";
import UserInput from "./UserInput";
import List from "./List";

class App extends Component {
  render() {
    return (
      <div>
        <UserInput />
        <List />
      </div>
    );
  }
}

export default App;
