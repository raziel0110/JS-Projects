import React from "react";

const cockpit = props => {
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  style.backgroundColor = "red";

  return (
    <div>
      <h1>Hi,I'm a React App</h1>
      <button onClick={props.toggle} style={style}>
        Show
      </button>
    </div>
  );
};

export default cockpit;
