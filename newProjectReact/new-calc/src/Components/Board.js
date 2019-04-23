import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import ClearButton from "./ClearButton";
import "./Board.css";

export default class Board extends Component {
  state = { value: "" };
  onAddValue = val => {
    this.setState({
      value: this.state.value + val
    });
  };

  onEqual = () => {
    this.setState({ value: eval(this.state.value) });
  };

  onReset = () => {
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="board">
        <div className="row">
          <Input value={this.state.value} />
        </div>
        <div className="row">
          <Button handleClick={this.onAddValue}>1</Button>
          <Button handleClick={this.onAddValue}>2</Button>
          <Button handleClick={this.onAddValue}>3</Button>
          <Button className="orange-buttons" handleClick={this.onAddValue}>
            +
          </Button>
        </div>
        <div className="row">
          <Button handleClick={this.onAddValue}>4</Button>
          <Button handleClick={this.onAddValue}>5</Button>
          <Button handleClick={this.onAddValue}>6</Button>
          <Button className="orange-buttons" handleClick={this.onAddValue}>
            -
          </Button>
        </div>
        <div className="row">
          <Button handleClick={this.onAddValue}>7</Button>
          <Button handleClick={this.onAddValue}>8</Button>
          <Button handleClick={this.onAddValue}>9</Button>
          <Button className="orange-buttons" handleClick={this.onAddValue}>
            *
          </Button>
        </div>
        <div className="row">
          <Button handleClick={this.onAddValue}>0</Button>
          <Button handleClick={this.onAddValue}>.</Button>
          <Button handleClick={this.onEqual}>=</Button>
          <Button className="orange-buttons" handleClick={this.onAddValue}>
            /
          </Button>
        </div>
        <div className="row">
          <ClearButton handleClick={this.onReset} />
        </div>
      </div>
    );
  }
}
