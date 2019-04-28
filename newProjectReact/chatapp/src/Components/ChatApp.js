// import React, { Component } from "react";
// import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

// import Input from "./Input";
// import MessageList from "./MessageList";

// export default class ChatApp extends Component {
//   state = {
//     currentUser: null,
//     currentRoom: { users: [] },
//     messages: [],
//     users: []
//   };

//   componentDidMount() {
//     const chatManager = new ChatManager({
//       instanceLocator: "v1:us1:d1d63d9e-b620-4222-8ff5-03f02dcf0595",
//       userId: this.props.currentId,
//       tokenProvider: new TokenProvider({
//         url:
//           "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d1d63d9e-b620-4222-8ff5-03f02dcf0595/token"
//       })
//     });

//     chatManager
//       .connect()
//       .then(currentUser => {
//         this.setState({ currentUser: currentUser });

//         return currentUser.subscribeToRoom({
//           roomId: "19428798",
//           messageLimit: 100,
//           hooks: {
//             onMessage: message => {
//               this.setState({ messages: [...this.state.messages, message] });
//             }
//           }
//         });
//       })
//       .then(currentRoom => {
//         this.setState({ currentRoom, users: currentRoom.userIds });
//       })
//       .catch(err => console.log(err));
//   }
//   addMessage = text => {
//     this.state.currentUser
//       .sendMessage({
//         text,
//         roomId: this.state.currentRoom.id
//       })
//       .catch(err => console.error("error", err));
//   };

//   render() {
//     return (
//       <div>
//         <h2 className="header">Let's talk</h2>
//         <MessageList messages={this.state.messages} />
//         <Input onSubmit={this.addMessage} className="input-field" />
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import Input from "./Input";
import MessageList from "./MessageList";

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      currentRoom: { users: [] },
      messages: [],
      users: []
    };
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: "v1:us1:d1d63d9e-b620-4222-8ff5-03f02dcf0595",
      userId: this.props.currentId,
      tokenProvider: new TokenProvider({
        url:
          "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d1d63d9e-b620-4222-8ff5-03f02dcf0595/token"
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser: currentUser });

        return currentUser.subscribeToRoom({
          roomId: "19428798",
          messageLimit: 100,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              });
            }
          }
        });
      })
      .then(currentRoom => {
        this.setState({
          currentRoom,
          users: currentRoom.userIds
        });
      })
      .catch(error => console.log(error));
  }

  addMessage(text) {
    console.log(this.state);
    this.state.currentUser
      .sendMessage({
        text,
        roomId: this.state.currentRoom.id
      })
      .catch(error => console.error("error", error));
  }

  render() {
    return (
      <div>
        <h2 className="header">Let's Talk</h2>
        <MessageList messages={this.state.messages} />
        <Input className="input-field" onSubmit={this.addMessage} />
      </div>
    );
  }
}
export default ChatApp;
