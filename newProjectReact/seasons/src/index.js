import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // constructor function initialized state
  //   constructor(props) {
  //     super(props);
  //     //THIS IS THE ONLY TIME WE DO ASSIGMENT TO this.state
  //     this.state = { lat: null, long: null, errorMessage: "" };
  //   }

  //alterantive initialization state,babel transform jsx code in js es5
  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //we called setState!!!
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // react need render method,required
  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Error:{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return (
        <div>
          Latitude : {this.state.lat}, Longitude : {this.state.long}
        </div>
      );
    }
    return <div>loading...</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
