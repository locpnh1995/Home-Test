import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import "./Home.css";
// import setVideoFullScreen from "../../utils/VideoUtils";

class Home extends React.Component {
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
      <main>
        <div id="bg-video">
          <iframe
            src="https://www.youtube.com/embed/dk9uNWPP7EA?rel=0&autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=dk9uNWPP7EA"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
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
