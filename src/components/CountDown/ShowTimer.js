import React from "react";
import { render } from "react-dom";
import TimerDisplayColumn from "./TimerDisplayColumn";
// import setVideoFullScreen from "../../utils/VideoUtils";

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

class ShowTimer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setVideoFullScreen();
  }

  setVideoFullScreen() {
    let iframeWidth = document.body.scrollWidth;
    let iframeHeight = Math.floor(document.body.scrollWidth * 9 / 16);
    document.getElementById("bg-video").style.width = `${iframeWidth}px`;
    document.getElementById("bg-video").style.height = `${iframeHeight}px`;
  }

  render() {
    return (
      <section className="center-section count-down-timmer">
        <div id="bg-video">
          <iframe
            src="https://www.youtube.com/embed/4EoUz39nPMM?rel=0&autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=4EoUz39nPMM"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
        <center>
          <h1 className="countdown-heading">
            Counting to
            {` ${
              MONTH_NAMES[this.props.targetDate.getMonth()]
            } ${this.props.targetDate.getDate()} ${this.props.targetDate.getFullYear()}`}
          </h1>
          <h1 className="countdown-heading">Comming Soon ...</h1>
          <div className="countdown-row">
            <TimerDisplayColumn
              countDownId="daysRemain"
              countDownValue={this.props.currentCountDownRemain.daysRemain}
              countDownLabel="days"
            />
            <TimerDisplayColumn
              countDownId="hoursRemain"
              countDownValue={this.props.currentCountDownRemain.hoursRemain}
              countDownLabel="hours"
            />
            <TimerDisplayColumn
              countDownId="minutesRemain"
              countDownValue={this.props.currentCountDownRemain.minutesRemain}
              countDownLabel="minutes"
            />
            <TimerDisplayColumn
              countDownId="secondsRemain"
              countDownValue={this.props.currentCountDownRemain.secondsRemain}
              countDownLabel="seconds"
            />
          </div>
        </center>
      </section>
    );
  }
}

export default ShowTimer;
