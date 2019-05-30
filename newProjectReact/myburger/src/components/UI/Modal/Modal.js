import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Auxiliar";
import BackDrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log("Modal Did Update");
  }

  render() {
    return (
      <Aux>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
