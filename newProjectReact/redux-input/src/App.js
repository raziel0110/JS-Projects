import React from "react";
import InputMirror from "./inputMirror";
import store from "./store/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <InputMirror store={store} />
    </div>
  );
}

export default App;
