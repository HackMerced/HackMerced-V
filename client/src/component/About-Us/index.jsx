import React from "react";

import "./about.scss";

import PORTRAIT from "../../assets/Images/film.png";

class AboutUs extends React.Component {
  render() {
    const isMobile = window.innerWidth <= 500;

    if (isMobile) {
      return (
        
      <section id="about-usMobile">
      {/* <img src={PORTRAIT} alt="Merced Portrait" /> */}
      <section id="aboutMobile">
        <h2 id="headerMobile">ABOUT US</h2>
        <div id="whatMobile">
          <h3>What we do</h3>
          <p>
            HackMerced is a 36-hour annual programming competition that occurs
            at the University of California, Merced and is open to students
            from all over the world. During the event, participants will
            collaborate in teams and attend workshops to learn about new
            technologies.
          </p>
        </div>

        <div id="whyMobile">
          <h3>Why we do it</h3>
          <p>
            We aim to create a collaborative, interdisciplinary event that
            brings together students from all universities and prospective
            sponsors to see the innovation and creativity culminating within
            the San Joaquin Valley.
          </p>
        </div>
      </section>
    </section>); // END OF MOBILE
    }
    else{ 
      
    return (
      
      <section id="about-us">
        <img src={PORTRAIT} alt="Merced Portrait" />
        <section id="about">
          <h2 id="header">ABOUT US</h2>
          <div id="what">
            <h3>What we do</h3>
            <p>
              HackMerced is a 36-hour annual programming competition that occurs
              at the University of California, Merced and is open to students
              from all over the world. During the event, participants will
              collaborate in teams and attend workshops to learn about new
              technologies.
            </p>
          </div>

          <div id="why">
            <h3>Why we do it</h3>
            <p>
              We aim to create a collaborative, interdisciplinary event that
              brings together students from all universities and prospective
              sponsors to see the innovation and creativity culminating within
              the San Joaquin Valley.
            </p>
          </div>
        </section>
      </section>
    );
  }
}
}
export default AboutUs;
