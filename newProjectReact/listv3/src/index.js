import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import InputUser from "./inputUser";

class App extends React.Component {
  state = { list: [] };

  addTodo = todo => {
    const { list } = this.state;
    list.push(todo);
    this.setState({ list: this.state.list });
    console.log(this.state.list);
  };
  render() {
    return (
      <div>
        <Header />
        <InputUser onAdd={this.addTodo} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
