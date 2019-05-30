import React from "react";
import { connect } from "react-redux";
import {
  deleteItem,
  updateItem,
  updateButton,
  onChangeUpdate
} from "../actions";

class List extends React.Component {
  state = { updateInput: "" };
  handleChange = e => {
    this.setState({ updateInput: e.target.value });
  };

  render() {
    const { todos } = this.props.todos;
    return (
      <div>
        <h3>List</h3>
        <ul>
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                {todo.isSelected ? (
                  <div>
                    <input
                      value={this.props.update}
                      onChange={e => this.props.onChangeUpdate(e, todo.text)}
                    />
                    <button
                      onClick={e =>
                        this.props.updateItem(
                          e,
                          todo.id,
                          this.state.updateInput
                        )
                      }
                    >
                      Update Value
                    </button>
                  </div>
                ) : (
                  <>
                    <div onClick={() => this.props.deleteItem(todo.id)}>
                      {todo.text}
                    </div>
                    <div>
                      <button onClick={() => this.props.updateButton(todo.id)}>
                        update
                      </button>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.inputTextValue,
    todos: state.todos,
    update: state.update
  };
};

export default connect(
  mapStateToProps,
  { deleteItem, updateItem, updateButton, onChangeUpdate }
)(List);
