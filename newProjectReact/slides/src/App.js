import React, { Component } from "react";
import Slider from "./Slider";
import defaultSlides from "./defaultSlides";

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Slider slides={defaultSlides} />
      </div>
    );
  }
}
