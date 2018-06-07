import React from "react";
import { render } from "react-dom";

class SliderControl extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let prevOrNextValue = this.props.controlName === "prev" ? -1 : 1;
    return (
      <a
        className={`slider-${this.props.controlName}-control`}
        onClick={() => {
          this.props.changeSliderItem(
            this.props.currentSlider + prevOrNextValue
          );
        }}
      >
        <span className={`${this.props.controlName}-icon`} />
      </a>
    );
  }
}

export default SliderControl;
