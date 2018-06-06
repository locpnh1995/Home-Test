import React from "react";
import { render } from "react-dom";
import "./CountDown.css";
import CountDownColumn from "./CountDownColumn";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class CountDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCounted: false,
      inputError: {
        isError: false,
        message: ""
      },
      startDate: new Date(),
      targetDate: new Date()
      // countDownTimmer: null
    };

    this.countDown = this.countDown.bind(this);
    this.showCountDown = this.showCountDown.bind(this);
  }
  countDown() {
    let startDate = new Date();
    this.setState({ startDate: startDate });

    let targetDateString = document.getElementById("target-date").value;

    //check if target date is blank
    if (targetDateString) {
      let targetDate = new Date(targetDateString);
      targetDate.setHours(0, 0, 0);

      //check if target date is from future
      if (targetDate - startDate <= 0) {
        this.setState({
          inputError: {
            isError: true,
            message: "Please choose date from future."
          }
        });
        return;
      }

      this.setState({ targetDate: targetDate });

      let milisecondRemain = targetDate - startDate;
      var countDownTimmer = setInterval(() => {
        this.showCountDown(milisecondRemain);
        milisecondRemain -= 1000;
      }, 1000);

      document.getElementById("count-down").style.backgroundImage = "none";
      this.setState({ isCounted: true });
    } else {
      //target date is blank
      this.setState({
        inputError: {
          isError: true,
          message: "Please choose the target date"
        }
      });
    }
  }

  showCountDown(milisecondRemain) {
    let daysRemain = Math.floor(milisecondRemain / DAY);
    let hoursRemain = Math.floor((milisecondRemain % DAY) / HOUR);
    let minutesRemain = Math.floor(((milisecondRemain % DAY) % HOUR) / MINUTE);
    let secondsRemain = Math.floor(
      (((milisecondRemain % DAY) % HOUR) % MINUTE) / SECOND
    );

    document.getElementById("daysRemain").innerHTML = daysRemain;
    document.getElementById("hoursRemain").innerHTML = hoursRemain;
    document.getElementById("minutesRemain").innerHTML = minutesRemain;
    document.getElementById("secondsRemain").innerHTML = secondsRemain;

    // console.log(
    //   `${daysRemain} days ${hoursRemain} hours ${minutesRemain} minutes ${secondsRemain} seconds`
    // );

    if (milisecondRemain < 0) {
      clearInterval(this.state.countDownTimmer);
    }
  }
  render() {
    return (
      <section id="count-down">
        {this.state.isCounted ? (
          <section className="center-section count-down-timmer">
            <div class="bg-video">
              <iframe
                frameBorder="0"
                height="100%"
                width="100%"
                allow="autoplay"
                src="https://youtube.com/embed/4EoUz39nPMM?autoplay=1&controls=0&showinfo=0&autohide=1"
              />
            </div>
            <center>
              <h1 className="countdown-heading">
                Counting to
                {` ${
                  MONTH_NAMES[this.state.targetDate.getMonth()]
                } ${this.state.targetDate.getDate()} ${this.state.targetDate.getFullYear()}`}
              </h1>
              <h1 className="countdown-heading">Comming Soon ...</h1>
              <div className="countdown-row">
                <CountDownColumn
                  countDownId="daysRemain"
                  countDownValue="0"
                  countDownLabel="days"
                />
                <CountDownColumn
                  countDownId="hoursRemain"
                  countDownValue="0"
                  countDownLabel="hours"
                />
                <CountDownColumn
                  countDownId="minutesRemain"
                  countDownValue="0"
                  countDownLabel="minutes"
                />
                <CountDownColumn
                  countDownId="secondsRemain"
                  countDownValue="0"
                  countDownLabel="seconds"
                />
              </div>
            </center>
          </section>
        ) : (
          // </section>
          <section className="center-section count-down-input">
            <center>
              <h1 className="countdown-heading">
                Choose your target date to count down
              </h1>
              <input id="target-date" type="date" />
              {this.state.inputError.isError && (
                <div class="error">
                  <strong>Error !</strong> {this.state.inputError.message}
                </div>
              )}
              <button
                className="button countdown-button"
                onClick={() => {
                  this.countDown();
                }}
              >
                Count Down
              </button>
            </center>
          </section>
        )}
      </section>
    );
  }
}

export default CountDown;
