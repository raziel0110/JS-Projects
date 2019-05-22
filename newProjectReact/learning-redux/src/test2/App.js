import React from "react";
import Counter from "./Counter";
import store from "../src/store/index";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter store={store} />
      </div>
    );
  }
}
export default App;
