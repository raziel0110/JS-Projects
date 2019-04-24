import React from "react";
import Modal from "./Modal";
import "./image.css";

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

    return (
      <div className="image">
        <div>
          <img
            src={`https://picsum.photos/id/${item.id}/400/300`}
            alt={item.author}
            onClick={this.showModal}
          />
        </div>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          src={this.props.item}
        >
          <div>
            <p>{item.author}</p>
          </div>
        </Modal>
      </div>
    );
  }
}
