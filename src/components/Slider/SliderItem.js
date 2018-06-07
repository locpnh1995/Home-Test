import React from "react";
import { render } from "react-dom";

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let classNameWillUse = this.props.isDisplay
      ? "slider-item slider-item-active"
      : "slider-item";
    return (
      <div className={classNameWillUse}>
        <img src={this.props.image.src} alt={this.props.image.alt} />
      </div>
    );
  }
}

export default SliderItem;
