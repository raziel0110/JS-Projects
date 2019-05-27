import React from "react";
import { connect } from "react-redux";

const List = props => {
  console.log(props.todos);
  return (
    <div>
      <h3>List</h3>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.input.todos
  };
};

export default connect(mapStateToProps)(List);
