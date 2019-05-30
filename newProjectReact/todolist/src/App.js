import React from "react";
import "./App.css";
import Header from "./header";
import ToDoInput from "./todoInput";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <ToDoInput addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
