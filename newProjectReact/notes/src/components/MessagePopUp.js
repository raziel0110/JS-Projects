import React from "react";
import "./MessagePopUp.css";

const MessagePopUp = props => {
  return (
    <div className="error-container">
      <div className="error-error">
        <h3>Please select a folder!</h3>
        <div className="error-btn">
          <button className="btn btn-danger " onClick={props.hideModal}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagePopUp;
