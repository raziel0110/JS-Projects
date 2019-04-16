import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    //old version of initialization state
    this.state = { count: 0 };
    this.handelClick = this.handelClick.bind(this);
  }
  // new way of initialization state
  //   state = { count: 0 };
  handelClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={this.handelClick}>{this.state.count}</button>;
  }
}

export default Button;
