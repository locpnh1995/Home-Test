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
      targetDate: new Date(),
      currentCountDownRemain: {
        daysRemain: 0,
        hoursRemain: 0,
        minutesRemain: 0,
        secondsRemain: 0
      }
    };
    this.changeStateIsCounted = this.changeStateIsCounted.bind(this);
    this.changeStateTargetDate = this.changeStateTargetDate.bind(this);
    this.changeStateCurrentCountDownRemain = this.changeStateCurrentCountDownRemain.bind(
      this
    );
  }
  changeStateIsCounted(value) {
    this.setState({ isCounted: value });
  }

  changeStateTargetDate(value) {
    this.setState({ targetDate: value });
  }

  changeStateCurrentCountDownRemain(value) {
    this.setState({
      currentCountDownRemain: {
        daysRemain: value.daysRemain,
        hoursRemain: value.hoursRemain,
        minutesRemain: value.minutesRemain,
        secondsRemain: value.secondsRemain
      }
    });
  }

  render() {
    return (
      <section id="count-down">
        {this.state.isCounted ? (
          <ShowTimer
            targetDate={this.state.targetDate}
            currentCountDownRemain={this.state.currentCountDownRemain}
          />
        ) : (
          <DateInput
            changeStateIsCounted={this.changeStateIsCounted}
            changeStateTargetDate={this.changeStateTargetDate}
            changeStateCurrentCountDownRemain={
              this.changeStateCurrentCountDownRemain
            }
          />
        )}
      </section>
    );
  }
}

export default CountDown;
