import React from "react";
import "./App.css";

class App extends React.Component {
  state = { counter: 0, error: false };

  increment = () => {
    if (this.state.counter >= 0) {
      this.setState({ counter: this.state.counter + 1, error: false });
    }
  };

  decrement = () => {
    if (this.state.counter <= 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  render() {
    let error;
    if (this.state.error) {
      error = <p data-test="error">Can't go below 0</p>;
    }
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently:{this.state.counter}
        </h1>
        {error}
        <button data-test="increment-button" onClick={this.increment}>
          Increment
        </button>
        <button data-test="decrement-button" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
