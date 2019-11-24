import React from "react";
import "./aboutUs.css";

class AboutUs extends React.Component {
  render() {
    return (
      <div id="pinkbackground">
        <article className="App-AboutUs" id="about-us">
          <div className="text">
            <div className="AboutUs-info">
              <h3>What we do</h3>
              <p>
                HackMerced is a 36-hour annual programming competition that
                occurs at the University of California, Merced and is open to
                students from all over the world. During the event, participants
                will collaborate in teams and attend workshops to learn about
                new technologies.
              </p>
            </div>
            <div className="AboutUs-goal">
              <h3>Why we do it</h3>
              <p>
                We aim to create a collaborative, interdisciplinary event that
                brings together students from all universities and prospective
                sponsors to see the innovation and creativity culminating within
                the San Joaquin Valley.
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
export default AboutUs;
