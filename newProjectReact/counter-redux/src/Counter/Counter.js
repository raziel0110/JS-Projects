import React from "react";
import { connect } from "react-redux";

const Counter = props => {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch({ type: "INCREMENT" });
    },

    onDecrement: () => {
      dispatch({ type: "DECREMENT" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
