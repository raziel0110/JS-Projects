import React from "react";
import { connect } from "react-redux";
import constants from "./store/constants";

const UserInput = props => {
  console.log(props);
  return (
    <div>
      <h4>Add to List</h4>
      <form onSubmit={props.onSubmit}>
        <input value={props.inputText} onChange={props.onChangeInput} />
      </form>
      <div>
        <ul>
          {props.items.map((item, index) => {
            return (
              <li key={index} onClick={() => props.itemDelete(index)}>
                {item}
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
    inputText: state.inputText,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeInput: e => {
      const action = { type: constants.INPUT_CHANGE, text: e.target.value };
      dispatch(action);
    },
    onSubmit: e => {
      e.preventDefault();
      const action = { type: constants.ADD_ITEM };
      dispatch(action);
    },
    itemDelete: index => {
      console.log("delete index", index);
      const action = { type: constants.DELETE_ITEM, index: index };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput);
