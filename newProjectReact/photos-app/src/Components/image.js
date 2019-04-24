import React from "react";
import Modal from "./Modal";
import "./image.css";
import "./modal.css";

export default class Image extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { item } = this.props;

    const modal = this.state.show && (
      <Modal show={this.state.show}>
        <div>
          <div className="modal-main">
            <img
              src={`https://picsum.photos/id/${item.id}/${item.width}/${
                item.height
              }`}
              alt={item.author}
            />
            <div>
              <p>{item.author}</p>
            </div>

            <button className="hideBtn" onClick={this.hideModal}>
              X
            </button>
          </div>
        </div>
      </Modal>
    );

    return (
      <div className="image">
        <div>
          <img
            src={`https://picsum.photos/id/${item.id}/400/300`}
            alt={item.author}
            onClick={this.showModal}
          />
          {modal}
        </div>
      </div>
    );
  }
}
