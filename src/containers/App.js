import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

function App(props) {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filterRobots = robots.filter((robot) => {
    console.log(props.store.getState());
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1>RobotFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterRobots}></CardList>
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}
// }

export default App;
