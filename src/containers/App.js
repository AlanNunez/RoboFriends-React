import React from "react";
import { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots}></CardList>
        </Scroll>
      </div>
    );
  }
}

export default App;
