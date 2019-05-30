import React from "react";

const Validation = props => {
  let text = "Text is long enough";

  if (props.length <= 5) {
    text = "Text is too short";
  }
  return <p>{text}</p>;
};
export default Validation;
