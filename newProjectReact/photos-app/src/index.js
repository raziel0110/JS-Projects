import React, { Component } from "react";
import ReactDOM from "react-dom";
import { List } from "./Components/bodyList";
import "./index.css";
class App extends Component {
  state = { images: [] };
  componentDidMount() {
    fetch("https://picsum.photos/list")
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data });
      });
  }
  render() {
    console.log(this.state.images);
    return (
      <div className="photos-container">
        <div className="header">
          <h2>Photos</h2>
          <List images={this.state.images} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
