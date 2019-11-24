import React from "react";

import "./sponsors.css";
import ASUCM from "../../assets/Images/asucm_logo.png";
import PASSWORD from "../../assets/Images/1password.png";
import DIGITALOCEAN from "../../assets/Images/DigitalOcean_logo.svg.png";
import SKETCH from "../../assets/Images/Sketch.png";
import ROCHE from "../../assets/Images/Roche_Logo.svg";
import BALSAMIQ from "../../assets/Images/balsamiq-logo-noborder-print.png";
import STICKERYOU from "../../assets/Images/stickeryou_logo.png";
import JETBRAINS from "../../assets/Images/jetbrains.png";
import MAKESCHOOL from "../../assets/Images/makeschool_logo.png";
import MLH from "../../assets/Images/mlh-logo-color.png";

class Sponsors extends React.Component {
  render() {
    return (
      <article className="App-Sponsors" id="Sponsors">
        <div className="sponsoring">
          {/*sponsoring section*/}
          <font size="6" color="#997080">
            {/* title of Sponsors*/}
            <p class="Sponsor-right">SPONSORS</p>
          </font>
          <br></br>
          <div className="Sponsor-row">
            {/*made a row for the display*/}
            <div className="column">
              {/*named it column instead of top*/}
              <a href="https://asucm.ucmerced.edu/">
                {/*goes to ASUCM site*/}
                <img className="asucm" src={ASUCM} alt="ASUCM" />
                {/*ASUCM logo and link*/}
              </a>
            </div>
            <div className="Sponsor-top">
              <a href="https://digitalocean.com/">
                {/*goes to digital ocean site*/}
                <img
                  className="digitalocean"
                  src={DIGITALOCEAN}
                  alt="Digital Ocean"
                />
                {/*Digital Ocean logo and link*/}
              </a>
            </div>
            <div className="Sponsor-top">
              <a href="https://roche.com/">
                {/*goes to roche site*/}
                <img className="roche" src={ROCHE} alt="Roche" />
                {/*Roche logo and link*/}
              </a>
            </div>
          </div>
          <div className="Sponsor-2row">
            {/*bottom row for the display*/}
            <div className="Sponsor-middle">
              <div className="password">
                <a href="https://1password.com/">
                  {/*goes to 1 password site*/}
                  <img
                    className="password"
                    src={PASSWORD}
                    alt="1Password"
                  />
                  {/*1 paswword logo and link*/}
                </a>
              </div>

              <div className="Sponsor-middle">
                <a href="https://www.makeschool.com/">
                  <img
                    className="makeschool"
                    src={MAKESCHOOL}
                    alt="Make School"
                  />
                </a>
              </div>
              <div className="Sponsor-middle">
                <a href="https://www.stickeryou.com/">
                  <img
                    className="stickeryou"
                    src={STICKERYOU}
                    alt="Sticker You"
                  />
                </a>
              </div>
            </div>
            <div className="Sponsor-3row">
              <div className="Sponsor-bottom">
                <a href="https://www.sketch.com/">
                  {/*goes to sketch site*/}
                  <img className="sketch" src={SKETCH} alt="Sketch" />
                  {/*Sketch logo and link*/}
                </a>
              </div>

              <div className="Sponsor-bottom">
                <a href="https://balsamiq.com/">
                  <img className="balsamiq" src={BALSAMIQ} alt="Balsamiq" />
                </a>
              </div>

              <div className="Sponsor-bottom">
                <a href="https://www.jetbrains.com/">
                  <img className="jetbrains" src={JETBRAINS} alt="Jetbrains" />
                </a>
              </div>
            </div>
            <div className="Sponsor-mlh">
              <a href="https://mlh.io/">
                <img className="mlh" src={MLH} alt="Major League Hacking" />
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Sponsors;
