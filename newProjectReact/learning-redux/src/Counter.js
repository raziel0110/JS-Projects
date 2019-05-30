import React from "react";
import { connect } from "react-redux";

const Counter = props => {
  console.log(props);
  return (
    <div>
      <button onClick={props.onIncrementClick}>increment</button>
      <span>Count: {props.count}</span>
      <button onClick={props.onDecrementClick}>decrement</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    count: state.count
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => {
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = { type: "DECREMENT" };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
