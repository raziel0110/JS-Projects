import React from "react";
import Option from "./Option";

class Options extends React.Component {
  state = { options: ["Thing One", "Thing Two", "Thing Tree"] };
  render() {
    return (
      <div>
        Options Components here
        <ul>
          {this.state.options.map((option, index) => {
            return (
              <li key={index}>
                <Option option={option} />
              </li>
            );
          })}
        </ul>
        <div>Items: {this.state.options.length}</div>
      </div>
    );
  }
}

export default Options;
