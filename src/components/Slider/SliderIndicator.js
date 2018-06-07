import React from "react";
import { render } from "react-dom";

class SliderIndicator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="slider-indicators">
        {this.props.images.map((image, index) => {
          return (
            <li
              key={index}
              className={
                "slider-indicator-item " +
                (this.props.currentSlider === index
                  ? "slider-indicator-item-active"
                  : "")
              }
              onClick={() => {
                this.props.changeSliderItem(index);
              }}
            />
          );
        })}
      </ul>
    );
  }
}

export default SliderIndicator;
