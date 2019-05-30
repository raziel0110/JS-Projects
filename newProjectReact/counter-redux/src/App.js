import React from "react";
import List from "./Todo";
import store from "./store";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <List store={store} />
    </div>
  );
};

export default App;
