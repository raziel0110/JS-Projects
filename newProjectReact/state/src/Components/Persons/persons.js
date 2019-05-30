import React from "react";
import Person from "./Person";

class Persons extends React.Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromProps");
  //     return state;
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons.js shouldComponentnUpdate");
    return true;
  }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("Persons.js getSnapshotBeforeUpdate");
  //   }

  componentDidUpdate() {
    console.log("Persons.js ComponentDidMount");
  }
  render() {
    console.log("[persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={e => this.props.changed(e, person.id)}
        />
      );
    });
  }
}
export default Persons;
