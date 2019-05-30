import React from "react";

import "./Post.css";

const post = props => (
  <article className="Post" onClick={props.clicked}>
    <h1>{props.post.title}</h1>
    <div className="Info">
      <div className="Author">{`Author:${props.post.author}`}</div>
    </div>
  </article>
);

export default post;
