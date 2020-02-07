import React from "react";

import "./sponsors.scss";
import ASUCM from "../../assets/Images/asucm.png";
import PASSWORD from "../../assets/Images/1password.png";
import DIGITALOCEAN from "../../assets/Images/digitalocean.png";
import SKETCH from "../../assets/Images/Sketch.png";
import ROCHE from "../../assets/Images/roche.png";
import BALSAMIQ from "../../assets/Images/balsamiq.png";
import STICKERYOU from "../../assets/Images/stickeryoulogo.png";
import JETBRAINS from "../../assets/Images/jetbrains.png";
import MAKESCHOOL from "../../assets/Images/makeschool.png";
import MLH from "../../assets/Images/mlh-logo-white.png";

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.sponsors = {
      platinum: {
        id: ["ASUCM", "MLH"],
        image: [],
        url: []
      },
      gold: {
        id: [],
        image: [],
        url: []
      },
      silver: {
        id: [
          "Linode",
          "DigitalOcean",
          "Roche",
          "Lawrence Livermore National Laboratory",
          "Founders"
        ],
        image: [],
        url: []
      },
      bronze: {
        id: [
          "Sketch",
          "MakeSchool",
          "1Password",
          "JetBrains",
          "StickerYou",
          "Balsamiq",
          "Clerky",
          "CloudSploit"
        ],
        image: [],
        url: []
      },
      id: [
        "asucm",
        "digitalocean",
        "roche",
        "jetbrains",
        "makeschool",
        "stickeryou",
        "sketch",
        "balsamiq",
        "password",
        "mlh"
      ],
      image: [
        ASUCM,
        DIGITALOCEAN,
        ROCHE,
        JETBRAINS,
        MAKESCHOOL,
        STICKERYOU,
        SKETCH,
        BALSAMIQ,
        PASSWORD,
        MLH
      ],
      alt: [
        "ASUCM",
        "DigitalOcean",
        "Roche",
        "JetBrains",
        "MakeSchool",
        "StickerYou",
        "Sketch",
        "Balsamiq",
        "1Password",
        "MLH"
      ],
      url: [
        "https://asucm.ucmerced.edu/",
        "https://digitalocean.com/",
        "https://roche.com/",
        "https://www.jetbrains.com/",
        "https://www.makeschool.com/",
        "https://www.stickeryou.com/",
        "https://www.sketch.com/",
        "https://balsamiq.com/",
        "https://1password.com/",
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
      sponsors.push(<div id="platinum">{item}</div>);
    });

    silver.forEach(item => {
      sponsors.push(<div id="silver">{item}</div>);
    });

    bronze.forEach(item => {
      sponsors.push(<div id="bronze">{item}</div>);
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
