import React from "react";
import "./list.css";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.removeTodo = this.removeTodo.bind(this);
  }
  removeTodo(item) {
    // const element = e.target.parentNode.parentNode;
    // const { items } = this.props;
    // const obj = items.find(el => {
    //   return el.id === parseInt(element.getAttribute("data-id"));
    // });
    this.props.onRemove(item);
  }

  updateTodo = item => {
    const value = item.value; // e.target.parentNode.previousSibling.textContent;
    // const { items } = this.props;
    // const element = e.target.parentNode.parentNode;
    const obj = item; /* items.find(el => {
      return el.id === parseInt(element.getAttribute("data-id"));
    });*/

    obj.value = prompt("do you wanna modify?", value);
    this.props.onUpdate(obj);
  };

  render() {
    return (
      <div className="list-body">
        <ul className="list-ul">
          {this.props.items.map(item => (
            <li key={item.id}>
              <div className="item-value">{item.value}</div>
              <div className="item-delBtn">
                <button
                  className="updateBtn"
                  onClick={() => {
                    this.updateTodo(item);
                  }}
                >
                  Update
                </button>
                <button
                  className="btnDel"
                  onClick={() => {
                    this.removeTodo(item);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
