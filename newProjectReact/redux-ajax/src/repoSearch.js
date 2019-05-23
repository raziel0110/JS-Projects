import React from "react";
import { connect } from "react-redux";

const RepoSearch = props => {
  return (
    <div>
      <h1>Repo Search</h1>
      <form>
        <input value={props.inputText} onChange={props.handleInputChange} />
      </form>

      <div>
        <ul>
          <li>item</li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputText: state.inputText,
    repos: state.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      const action = { type: "INPUT_CHANGE", text: e.target.value };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSearch);
