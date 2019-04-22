import React from "react";

class List extends React.Component {
  onDelete = item => {
    this.props.onDel(item);
  };

  onUpdate = item => {
    const value = item.userInput;
    const obj = item;
    obj.userInput = prompt("change?", value);
    this.props.onUpdate(obj);
  };

  render() {
    return (
      <div className="list-container">
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>
              <div className="list-value">
                <h5>{item.userInput}</h5>
              </div>
              <div className="list-buttons">
                <button
                  onClick={() => {
                    this.onDelete(item);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    this.onUpdate(item);
                  }}
                >
                  Update
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
