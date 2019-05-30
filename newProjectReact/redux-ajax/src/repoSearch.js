import React from "react";
import { connect } from "react-redux";
import Api from "./Api";

const RepoSearch = props => {
  return (
    <div>
      <h1>Repo Search</h1>
      <form onSubmit={e => props.handleSubmit(e, props.inputText)}>
        <input value={props.inputText} onChange={props.handleInputChange} />
      </form>

      <div>
        <ul>
          {props.repos.map(repo => {
            return (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
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
    repos: state.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: e => {
      const action = { type: "INPUT_CHANGE", text: e.target.value };
      dispatch(action);
    },

    handleSubmit: (e, query) => {
      e.preventDefault();
      Api.getRepos(dispatch, query);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSearch);
