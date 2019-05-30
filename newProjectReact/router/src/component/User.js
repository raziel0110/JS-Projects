import React from "react";

const User = ({ match }) => {
  return <p>{match.params.id}</p>;
};

export default User;
