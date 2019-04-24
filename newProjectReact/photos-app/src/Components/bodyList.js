import React, { Component } from "react";
import Image from "./image";

import "./list.css";

export class List extends Component {
  render() {
    return (
      <div className="photo-list">
        {this.props.images.map(item => (
          <Image item={item} key={item.id} />
        ))}
      </div>
    );
  }
}
