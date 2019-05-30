import React from "react";

class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <li key={item.id}>
        <div className="item-value">{item.value}</div>
        <div className="item-delBtn">
          <button
            className="updateBtn"
            onClick={() => {
              this.props.onUpdate(item);
            }}
          >
            Update
          </button>
          <button
            className="btnDel"
            onClick={() => {
              this.props.onRemove(item);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}

export default ListItem;
