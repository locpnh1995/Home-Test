import React from "react";
import { render } from "react-dom";
import SliderItem from "./SliderItem";
import SliderControl from "./SliderControl";
import SliderIndicator from "./SliderIndicator";
import "./Slider.css";

//5 seconds
const CHANGE_SLIDE_INTERVAL_VALUE = 5000;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlider: 0,
      images: [
        {
          src:
            "https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=720&w=750",
          alt: "bright-desk"
        },
        {
          src:
            "https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&h=1079&w=1619",
          alt: "white-desk"
        },
        {
          src:
            "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1619",
          alt: "full-desk"
        }
      ]
    };

    this.changeSliderItem = this.changeSliderItem.bind(this);
  }

  changeSliderItem(slideNumber) {
    if (slideNumber < 0) {
      this.setState({ currentSlider: this.state.images.length - 1 });
    } else if (slideNumber > this.state.images.length - 1) {
      this.setState({ currentSlider: 0 });
    } else this.setState({ currentSlider: slideNumber });
  }

  componentDidMount() {
    setInterval(() => {
      this.changeSliderItem(this.state.currentSlider + 1);
    }, CHANGE_SLIDE_INTERVAL_VALUE);
  }

  render() {
    const SLIDER_ITEMS = this.state.images.map((image, index) => {
      return (
        <SliderItem
          key={index}
          image={image}
          isDisplay={this.state.currentSlider == index ? true : false}
        />
      );
    });
    return (
      <section id="slider" className="container">
        <div id="slider-items">{SLIDER_ITEMS}</div>
        <SliderControl
          changeSliderItem={this.changeSliderItem}
          controlName="prev"
          currentSlider={this.state.currentSlider}
        />
        <SliderControl
          changeSliderItem={this.changeSliderItem}
          controlName="next"
          currentSlider={this.state.currentSlider}
        />
        <SliderIndicator
          changeSliderItem={this.changeSliderItem}
          images={this.state.images}
          currentSlider={this.state.currentSlider}
        />
      </section>
    );
  }
}

export default Slider;
