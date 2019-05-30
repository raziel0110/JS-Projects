import React from "react";

const Topic = ({ match }) => {
  return <h5>{match.params.topicId}</h5>;
};
export default Topic;
