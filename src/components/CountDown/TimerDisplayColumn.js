import React from "react";
import { render } from "react-dom";

class CountDownColumn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="countdown-col">
        <div id={this.props.countDownId} className="countdown-number">
          {this.props.countDownValue}
        </div>
        <div className="countdown-label">{this.props.countDownLabel}</div>
      </div>
    );
  }
}

export default CountDownColumn;
