import React from "react";

class ToDoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "", list: [] };
  }

  changeUserInput(input) {
    this.setState({ value: input }, () => {
      console.log(input);
    });
  }

  addToList(input) {
    let listArry = this.state.list;
    listArry.push(input);
    this.setState({ list: listArry, value: "" });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.changeUserInput(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            this.addToList(this.state.value);
          }}
        >
          Add to List
        </button>

        <ul>
          {this.state.list.map(val => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoInput;
