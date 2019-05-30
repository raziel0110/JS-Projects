import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import UserInput from "./userInput";
import List from "./list";
import "./index.css";

class App extends React.Component {
  state = { list: [] };

  addToDo = todo => {
    const { list } = this.state;
    list.push(todo);
    this.setState({ list });
    // this.setState({});
  };

  removeTodo = todo => {
    const { list } = this.state;
    this.setState({ list: list.filter(item => item.id !== todo.id) });
  };

  updateTodo = todo => {
    // debugger;
    const { list } = this.state;
    const element = list.find(item => item.id === todo.id);
    this.setState(element);
  };

  render() {
    console.log("Render: ", this.state.list);
    return (
      <div className="container">
        <Header />
        <UserInput onAdd={this.addToDo} />
        <List
          items={this.state.list}
          onRemove={this.removeTodo}
          onUpdate={this.updateTodo}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
