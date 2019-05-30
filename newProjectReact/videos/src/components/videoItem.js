import React from "react";
import "./videoItem.css";

class VideoItem extends React.Component {
  render() {
    const { video } = this.props;
    return (
      <div
        className="video-item item"
        onClick={() => {
          this.props.onVideoSelect(video);
        }}
      >
        <img
          alt={video.snippet.title}
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
