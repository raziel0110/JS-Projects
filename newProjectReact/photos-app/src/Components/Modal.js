import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const modal = document.getElementById("modal");

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    modal.appendChild(this.el);
  }

  componentWillUnmount() {
    modal.removeChild(this.el);
  }

  render() {
    // const { show, src } = this.props;
    // const showHideClaseName = show
    //   ? "modal display-block"
    //   : "modal display-none";
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
