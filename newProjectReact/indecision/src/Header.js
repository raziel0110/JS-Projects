import React from "react";

class Header extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer?";
    return (
      <div>
        <h1>{title ? "Indecison" : "Some Text"}</h1>
        <h4>{subtitle}</h4>
      </div>
    );
  }
}
export default Header;
