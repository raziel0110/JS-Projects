import React from "react";

export default class LargeImage extends React.Component {
  render() {
    const { item, width, height } = this.props;
    console.log(item);
    return (
      <div>
        <img src={`https://picsum.photos/id/${item}/${width}/${height}`} />
      </div>
    );
  }
}
