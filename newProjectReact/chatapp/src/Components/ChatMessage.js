import React from "react";

export default class ChatMessage extends React.Component {
  changeView = () => {
    this.props.changeView("signup");
  };
  render() {
    return (
      <div>
        <button className="chat-button" onClick={this.changeView} Send Message>
          Add Message
        </button>
      </div>
    );
  }
}
