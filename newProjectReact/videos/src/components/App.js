import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./videoList";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async string => {
    const response = await youtube.get("/search", {
      params: {
        q: string
      }
    });

    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
