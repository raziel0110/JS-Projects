import React from "react";
import PropTypes from "prop-types";

const Test = props => {
  return (
    <div>
      <h1>{props.str}</h1>
      <h1>{props.bool ? "bool" : "no booll"}</h1>
      <h3>{props.stringOrNr}</h3>
    </div>
  );
};

Test.propTypes = {
  str: PropTypes.string,
  bool: PropTypes.bool,
  stringOrNr: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Test str={"string"} bool={true} stringOrNr={true} />
      </div>
    );
  }
}

export default App;
