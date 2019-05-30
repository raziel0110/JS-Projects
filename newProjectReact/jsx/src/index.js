// import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react Component
const App = () => {
  const buttonTest = { text: "Click Me!" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonTest.text}</button>
    </div>
  );
};

//Take react component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
