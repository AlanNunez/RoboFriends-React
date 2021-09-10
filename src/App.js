import React from "react";
import { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
    // console.log("constructor");
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
    // console.log("componentDidMount");
  }

  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1>RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filterRobots}></CardList>
        </div>
      );
    }
    // console.log(filterRobots);
    // console.log("render");
  }
}

export default App;
