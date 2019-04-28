import React, { Component } from "react";
import ChatMessage from "./Components/ChatMessage";
import Signup from "./Components/Signup";
import ChatApp from "./Components/ChatApp";

import { default as Chatkit } from "@pusher/chatkit-server";

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:d1d63d9e-b620-4222-8ff5-03f02dcf0595",
  key:
    "27eea59e-4650-4313-9bc0-fb9c721eb66c:hRrm/fvFhq9uHD8oP28M6oXq6vTCKnE65NvZhx6AFo4="
});

export default class App extends Component {
  state = { currentView: "signup", currentId: "", currentUsername: "" };

  changeView = view => {
    this.setState({ currentView: view });
  };

  createUser = username => {
    chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(currentUser => {
        console.log(currentUser);
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: "chatApp"
        });
      })
      .catch(err => {
        if (err.status === 400) {
          this.setState({
            currentUsername: username,
            currentId: username,
            currentView: "chatApp"
          });
        } else {
          console.log(err.status);
        }
      });
  };

  render() {
    let view = "";
    if (this.state.currentView === "ChatMessage") {
      view = <ChatMessage changeView={this.changeView} />;
    } else if (this.state.currentView === "signup") {
      view = <Signup onSubmit={this.createUser} />;
    } else if (this.state.currentView === "chatApp") {
      view = <ChatApp currentId={this.state.currentId} />;
    }
    return <div className="App">{view}</div>;
  }
}
