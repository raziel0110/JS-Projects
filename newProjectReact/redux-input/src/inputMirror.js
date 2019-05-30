import React from "react";
import { connect } from "react-redux";

const InputMirror = props => {
  return (
    <div>
      <input value={props.inputValue} onChange={props.onInputChange} />
      <p>{props.inputValue}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: e => {
      const action = { type: "INPUT_CHANGE", text: e.target.value };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputMirror);
