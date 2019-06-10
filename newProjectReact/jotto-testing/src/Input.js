import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button data-test="submit" type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    success: state.success
  };
};

export default connect(mapStateToProps)(Input);
