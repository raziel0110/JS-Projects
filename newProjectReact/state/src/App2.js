import React from "react";
import Validation from "./Components/Validation";
import Char from "./Components/Char";

export default class App2 extends React.Component {
  state = { userInput: "" };

  changeHandler = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  deleteHander = index => {
    const characters = this.state.userInput.split("");
    characters.splice(index, 1);
    const updateCharacters = characters.join("");
    this.setState({
      userInput: updateCharacters
    });
  };

  render() {
    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          key={index}
          char={char}
          clicked={() => {
            this.deleteHander(index);
          }}
        />
      );
    });
    return (
      <div>
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.userInput}
        />

        <Validation length={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}
