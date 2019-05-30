import React from "react";
import { connect } from "react-redux";

const Footer = props => {
  return <footer>Total Count : {props.count}</footer>;
};

const mapStateToProps = state => {
  return {
    count: state.items.length
  };
};

export default connect(mapStateToProps)(Footer);
