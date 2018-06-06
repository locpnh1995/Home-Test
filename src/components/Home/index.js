import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <main>
        <h1>Home page</h1>
        <Link to="/count-down">Count Down</Link>
        <Link to="/slider">Slider</Link>
      </main>
    );
  }
}

export default Home;
