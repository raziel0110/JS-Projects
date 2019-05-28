import React from "react";
import { connect } from "react-redux";
import { deleteItem, updateItem, updateButton } from "../actions";

class List extends React.Component {
  state = { updateInput: "" };
  handleChange = e => {
    this.setState({ updateInput: e.target.value });
  };
  render() {
    console.log(this.state.updateInput);
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
                    <form>
                      <input value={todo.text} onChange={this.handleChange} />
                      <button>Update Value</button>
                    </form>
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
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { deleteItem, updateItem, updateButton }
)(List);
