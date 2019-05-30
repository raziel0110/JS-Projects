import React from "react";
import Persons from "./Components/Persons/persons";
import Cockpit from "./Components/cockpit";
import WithClass from "./Components/hoc/WithClass";
import Radium, { StyleRoot } from "radium";

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: 1, name: "Max", age: 20 },
      { id: 2, name: "XXX", age: 18 },
      { id: 3, name: "Vladut", age: 30 }
    ],
    show: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] from getDerivedStateFromProps", props);
  }

  componentDidMount() {
    console.log("Component did mount");
  }
  deleteHandler = index => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  clickHandler = (e, id) => {
    const personId = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    const person = { ...this.state.persons[personId] };
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState({ persons: persons });
  };

  toggleHandler = () => {
    const show = this.state.show;
    this.setState({ show: !show });
  };

  render() {
    console.log("[App.js] from render");
    let persons = null;

    if (this.state.show) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deleteHandler}
            changed={this.clickHandler}
          />
        </div>
      );
    }
    return (
      <WithClass classes={sal}>
        <StyleRoot>
          <div>
            <Cockpit toggle={this.toggleHandler} persons={this.state.persons} />
            {persons}
          </div>
        </StyleRoot>
      </WithClass>
    );
  }
}

export default Radium(App);
