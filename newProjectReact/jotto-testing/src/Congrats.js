import React from "react";
import propTypes from "prop-types";

const congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guested the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

congrats.propTypes = {
  success: propTypes.bool
};

export default congrats;
