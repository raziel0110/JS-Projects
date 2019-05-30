import React from "react";
import "./Button.css";
const button = props => (
  <button onClick={props.clicked} className={`Button ${props.btnType}`}>
    {props.children}
  </button>
);

export default button;
