import React from "react";

const UserInput = props => {
  return (
    <div>
      <input type="text" onChange={props.changed} value={props.username} />
    </div>
  );
};

export default UserInput;
