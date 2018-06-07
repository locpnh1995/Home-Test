import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <main>
        <video className="homepage-video-bg" autoPlay muted loop>
          <source src="homepage_video_bg.mp4" type="video/mp4" />
        </video>
        <section id="homepage-content">
          <center>
            <h1 className="homepage-heading">TIKI TEST</h1>
            <h1 className="homepage-heading">
              Which one do you want to explore ?
            </h1>
            <Link className="button homepage-button" to="/count-down">
              Count Down
            </Link>
            <Link className="button homepage-button" to="/slider">
              Slider
            </Link>
          </center>
        </section>
      </main>
    );
  }
}

export default Home;
