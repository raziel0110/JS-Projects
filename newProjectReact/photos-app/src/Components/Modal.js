import React from "react";

import "./modal.css";

export default class Modal extends React.Component {
  render() {
    const { show, src } = this.props;
    const showHideClaseName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClaseName}>
        <div className="modal-main">
          <img
            src={`https://picsum.photos/id/${src.id}/900`}
            alt={src.author}
          />
          <button className="hideBtn" onClick={this.props.handleClose}>
            X
          </button>
        </div>
      </div>
    );
  }
}
