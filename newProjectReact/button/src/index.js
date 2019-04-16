import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

class App extends React.Component {
  render() {
    return (
      <div>
        <Button />
        <Button />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
