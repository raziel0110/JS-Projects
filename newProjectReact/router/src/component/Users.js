import React from "react";
import User from "./User";
import { Route, Link } from "react-router-dom";

const Users = props => {
  console.log(props);
  return (
    <div>
      <h3>Users page :</h3>
      <strong>Select a user</strong>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
        <li>
          <Link to="/users/3">User 3</Link>
        </li>
      </ul>
      <Route path="/users/:id" component={User} />
    </div>
  );
};

export default Users;
