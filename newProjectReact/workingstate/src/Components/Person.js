import React from "react";

export default class Person extends React.Component {
  render() {
    return (
      <div>
        <p onClick={this.props.click}>
          {this.props.name} has {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}
