import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
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

export default Person;
