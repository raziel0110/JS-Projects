import React from "react";
import VideoItem from "./videoItem";

const VideoList = ({ videos }) => {
  const renderList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
