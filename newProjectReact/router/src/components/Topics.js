import React from "react";
import { Route, Link } from "react-router-dom";
import Topic from "./Topic";

const Topics = ({ match }) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering component in react
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Component in react</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  );
};

export default Topics;
