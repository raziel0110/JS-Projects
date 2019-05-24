import React from "react";
import { connect } from "react-redux";

const List = props => {
  console.log(props);
  return (
    <div>
      <h1>Shoping List</h1>
      <form onSubmit={props.onSubmit}>
        <input value={props.inputSearchText} onChange={props.handleChange} />
      </form>
      <div>
        <ul>
          {props.todos.map((todo, index) => {
            return (
              <li key={index}>
                <div onClick={() => props.onDelete(index)}>{todo}</div>
                <div>
                  <button onClick={() => props.onUpdate(index)}>Update</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputSearchText: state.inputSearchText,
    todos: state.todos
  };
};

const mapDispachToProps = dispatch => {
  return {
    handleChange: e => {
      dispatch({ type: "INPUT_CHANGE", text: e.target.value });
    },
    onSubmit: e => {
      e.preventDefault();
      dispatch({ type: "ADD_TODO" });
    },
    onDelete: index => {
      dispatch({ type: "DELETE_TODO", index: index });
    },
    onUpdate: index => {
      console.log("Update:", index);
      dispatch({ type: "UPDATE_TODO", index: index });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(List);
