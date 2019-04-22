import React from "react";
import "./videoItem.css";

class VideoItem extends React.Component {
  render() {
    return (
      <div className="video-item item">
        <img
          className="ui image"
          src={this.props.video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
