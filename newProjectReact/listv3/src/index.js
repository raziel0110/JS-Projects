import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import InputUser from "./inputUser";
import List from "./list";

class App extends React.Component {
  state = { list: [] };

  addTodo = todo => {
    const { list } = this.state;
    list.push(todo);
    this.setState({ list: this.state.list });
    console.log(this.state.list);
  };

  deleteTodo = todo => {
    const { list } = this.state;
    this.setState({ list: list.filter(item => item.id !== todo.id) });
  };

  updateTodo = todo => {
    const { list } = this.state;
    const element = list.find(item => item.id === todo.id);
    this.setState(element);
  };
  render() {
    return (
      <div>
        <Header />
        <InputUser onAdd={this.addTodo} />
        <List
          items={this.state.list}
          onDel={this.deleteTodo}
          onUpdate={this.updateTodo}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
