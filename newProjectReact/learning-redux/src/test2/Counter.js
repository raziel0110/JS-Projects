import React from "react";
import { connect } from "react-redux";

const Counter = props => {
  console.log("render", props);
  return (
    <div>
      <h1>I am Counter</h1>
      <p>Count:{props.count} </p>
      <button onClick={props.onIncrementClick}>increment</button>
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
    onIncrementClick: () => {
      console.log("clicking");
      const action = { type: "INCREMENT" };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
