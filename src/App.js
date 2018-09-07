import React, { Component } from "react";
import PeopleList from "./components/PeopleList";
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
  render() {
    const { people, picked } = this.state;

    let peopleList = people.map((e, i, arr) => {
      return <PeopleList name={e} />;
    });

    return (
      <div>
        <h3>General List</h3>
        {peopleList}
        <h3>Picked List</h3>
      </div>
    );
  }
}

export default App;
