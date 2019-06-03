import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;

  let validatorError = null;
  if (props.invalid && props.touched) {
    validatorError = <p>Please enter a valid value!</p>;
  }

  switch (props.formElement) {
    case "input":
      inputElement = (
        <input
          className={
            props.invalid && props.sholdValidate && props.touched
              ? "InputElement Invalid"
              : "InputElement"
          }
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={props.valid ? "InputElement" : "InputElement  Invalid"}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className="InputElement"
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option value={option.value} key={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
      {validatorError}
    </div>
  );
};

export default input;
