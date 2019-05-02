import React from "react";
import Radium from "radium";
import "./Person.css";

class Person extends React.Component {
  render() {
    console.log("Persons.js rendering");
    const style = {
      "@media (min-width :500px)": {
        width: "450px"
      }
    };

    return (
      <div className="person" style={style}>
        <p onClick={this.props.click}>
          {this.props.name} has {this.props.age} years old
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Radium(Person);
