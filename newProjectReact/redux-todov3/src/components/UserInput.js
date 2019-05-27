import React from "react";
import { connect } from "react-redux";
import { inputText, onSubmit } from "../actions";

const UserInput = props => {
  return (
    <div>
      <form onSubmit={e => props.onSubmit(e)}>
        <input
          type="text"
          value={props.userInput}
          onChange={e => props.inputText(e)}
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInput: state.input.inputTextValue,
    todos: state.input.todos
  };
};

export default connect(
  mapStateToProps,
  { inputText, onSubmit }
)(UserInput);
