import React from "react";
import { Route } from "react-router-dom";

class Car extends React.Component {
  state = { name: "" };

  componentDidMount() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query) {
      this.setState({ name: param[1] });
    }
  }

  componentDidUpdate() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query) {
      if (this.state.name !== param[1]) {
        this.setState({ name: param[1] });
      }
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Car brand name:{this.state.name} </h1>
        <p>You selected the car with id:{this.props.match.params.carId}</p>
      </div>
    );
  }
}

export default Car;
