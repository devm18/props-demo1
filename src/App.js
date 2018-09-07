import React, { Component } from "react";
import PeopleList from "./components/PeopleList";
import PickedList from "./components/PeopleList";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: ["John", "Bob", "Harry", "Lina", "Stacy"],
      picked: []
    };
  }

  handleConfirm = person => {
    const peopleCopy = this.state.people.slice();
    const index = peopleCopy.indexOf(person);
    peopleCopy.splice(index, 1);

    const pickedCopy = this.state.picked.slice();
    pickedCopy.push(person);

    this.setState({ people: peopleCopy, picked: pickedCopy });
  };

  render() {
    const { people, picked } = this.state;

    let peopleList = people.map((e, i, arr) => {
      return <PeopleList key={i} name={e} confirmMethod={this.handleConfirm} />;
    });

    let pickedList = picked.map((e, i, arr) => {
      return <PickedList key={i} name={e} />;
    });

    return (
      <div>
        <h3>General List</h3>
        {peopleList}
        <h3>Picked List</h3>
        {pickedList}
      </div>
    );
  }
}

export default App;
