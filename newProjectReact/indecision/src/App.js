import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
      </div>
    );
  }
}

export default App;
