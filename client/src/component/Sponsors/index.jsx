import React from "react";

import "./sponsors.scss";
import ASUCM from "../../assets/Images/asucm_logo.png";
import PASSWORD from "../../assets/Images/1password.png";
import DIGITALOCEAN from "../../assets/Images/digitalocean.png";
import SKETCH from "../../assets/Images/Sketch.png";
import ROCHE from "../../assets/Images/roche.png";
import BALSAMIQ from "../../assets/Images/balsamiq.png";
import STICKERYOU from "../../assets/Images/stickeryoulogo.png";
import JETBRAINS from "../../assets/Images/jetbrains.png";
import MAKESCHOOL from "../../assets/Images/makeschool_logo.png";
import MLH from "../../assets/Images/mlh-logo-white.png";

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.sponsors = {
      id: [
        "asucm",
        "digitalocean",
        "roche",
        "password",
        "makeschool",
        "stickeryou",
        "sketch",
        "balsamiq",
        "jetbrains",
        "mlh"
      ],
      image: [
        ASUCM,
        DIGITALOCEAN,
        ROCHE,
        PASSWORD,
        MAKESCHOOL,
        STICKERYOU,
        SKETCH,
        BALSAMIQ,
        JETBRAINS,
        MLH
      ],
      alt: [
        "ASUCM",
        "DigitalOcean",
        "Roche",
        "1Password",
        "MakeSchool",
        "StickerYou",
        "Sketch",
        "Balsamiq",
        "JetBrains",
        "MLH"
      ],
      url: [
        "https://asucm.ucmerced.edu/",
        "https://digitalocean.com/",
        "https://roche.com/",
        "https://1password.com/",
        "https://www.makeschool.com/",
        "https://www.stickeryou.com/",
        "https://www.sketch.com/",
        "https://balsamiq.com/",
        "https://www.jetbrains.com/",
        "https://mlh.io/"
      ],
      tier: [
        "platinum",
        "silver",
        "silver",
        "bronze",
        "bronze",
        "bronze",
        "bronze",
        "bronze",
        "bronze",
        "platinum"
      ]
    };
  }

  createSponsors = ({ id, image, alt, url, tier }) => {
    let sponsors = [],
      platinum = [],
      silver = [],
      bronze = [];

    for (let i = 0; i < id.length; ++i) {
      switch (tier[i]) {
        case "platinum": {
          platinum.push(
            <div className="sponsor" id={id[i]} key={i}>
              <a href={url[i]}>
                <img src={image[i]} alt={alt[i]} />
              </a>
            </div>
          );
          break;
        }
        case "silver":
          silver.push(
            <div className="sponsor" id={id[i]} key={i}>
              <a href={url[i]}>
                <img src={image[i]} alt={alt[i]} />
              </a>
            </div>
          );
          break;
        case "bronze":
          bronze.push(
            <div className="sponsor" id={id[i]} key={i}>
              <a href={url[i]}>
                <img src={image[i]} alt={alt[i]} />
              </a>
            </div>
          );
          break;
        default:
          break;
      }
    }

    platinum.forEach(item => {
      sponsors.push(
        <div id="platinum" key="platinum">
          {item}
        </div>
      );
    });

    silver.forEach(item => {
      sponsors.push(
        <div id="silver" key="silver">
          {item}
        </div>
      );
    });

    bronze.forEach(item => {
      sponsors.push(
        <div id="bronze" key="bronze">
          {item}
        </div>
      );
    });

    return sponsors;
  };

  render() {
    return (
      <section id="sponsors">
        <h2>Sponsors</h2>
        <div id="sponsors-grid">{this.createSponsors(this.sponsors)}</div>
      </section>
    );
  }
}

export default Sponsors;
