import React from "react";
import "./list.css";
import ListItem from "./listItem";

class List extends React.Component {
  removeTodo = item => {
    this.props.onRemove(item);
  };

  updateTodo = item => {
    const value = item.value;
    const obj = item;
    obj.value = prompt("do you wanna modify?", value);
    this.props.onUpdate(obj);
  };

  render() {
    return (
      <div className="list-body">
        <ul className="list-ul">
          {this.props.items.map(item => (
            <ListItem
              item={item}
              onRemove={this.removeTodo}
              onUpdate={this.updateTodo}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
