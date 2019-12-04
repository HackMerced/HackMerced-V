import React from "react";

import "./Title.css";
import polaroid from "../../assets/Images/polaroid.png";

class Title extends React.Component {
  render() {
    return (
      <article className="App-title" id="Title">
        <section className="title-title">
          {/* Headers */}
          <h2>HACK Merced</h2>
          <h4>February 28 - March 1</h4>
          <div id="js-show-modal" class="launch-button">
            <a href="https://localhackday.mlh.io/build/locations/2418">
              Apply Now
              <div class="launch-button__glare"></div>
            </a>
          </div>
          {/* popup button trigger */}
        </section>
        <img id="title-image" src={polaroid} alt="Italian Trulli"></img>
      </article>
    );
  }
}

export default Title;
