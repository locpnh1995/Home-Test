import React from "react";
import { render } from "react-dom";
import "./CountDown.css";
import ShowTimer from "./ShowTimer";
import DateInput from "./DateInput";

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCounted: false,
      targetDate: new Date()
    };
    this.changeStateIsCounted = this.changeStateIsCounted.bind(this);
    this.changeStateTargetDate = this.changeStateTargetDate.bind(this);
  }
  changeStateIsCounted(value) {
    this.setState({ isCounted: value });
  }

  changeStateTargetDate(value) {
    this.setState({ targetDate: value });
  }

  render() {
    return (
      <section id="count-down">
        {this.state.isCounted ? (
          <ShowTimer targetDate={this.state.targetDate} />
        ) : (
          <DateInput
            changeStateIsCounted={this.changeStateIsCounted}
            changeStateTargetDate={this.changeStateTargetDate}
          />
        )}
      </section>
    );
  }
}

export default CountDown;
