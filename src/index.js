import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import CountDown from "./components/CountDown";
import Slider from "./components/Slider";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <BrowserRouter>
    <div className="full-height">
      <Route exact path="/" component={Home} />
      <Route path="/count-down" component={CountDown} />
      <Route path="/slider" component={Slider} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
