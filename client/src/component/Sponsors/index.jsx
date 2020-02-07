import React from "react";

import "./sponsors.scss";

// Platinum Sponsors
import ASUCM from "../../assets/Images/asucm.png";
import MLH from "../../assets/Images/mlh-logo-white.png";

// Silver Sponsors
import LINODE from "../../assets/Images/linode.png";
import DIGITALOCEAN from "../../assets/Images/digitalocean.png";
import ROCHE from "../../assets/Images/roche.png";
import FOUNDERS from "../../assets/Images/founders.png";

// Bronze Sponsors
import SKETCH from "../../assets/Images/Sketch.png";
import MAKESCHOOL from "../../assets/Images/makeschool.png";
import PASSWORD from "../../assets/Images/1password.png";
import JETBRAINS from "../../assets/Images/jetbrains.png";
import STICKERYOU from "../../assets/Images/stickeryoulogo.png";
import BALSAMIQ from "../../assets/Images/balsamiq.png";
import CLERKY from "../../assets/Images/clerky.png";
import CLOUDSPLOIT from "../../assets/Images/cloudsploit.png";
import MAKEYMAKEY from "../../assets/Images/makey makey.png";
import EGGHEAD from "../../assets/Images/egghead.png";
import DESMOS from "../../assets/Images/desmos.png";
import AOPS from "../../assets/Images/aops.png";
import BUGSEE from "../../assets/Images/bugsee.png";
import MAGOOSH from "../../assets/Images/magoosh.png";
import CITRIS from "../../assets/Images/citris.png";
import WOLFRAM from "../../assets/Images/wolfram.png";
import STICKERMULE from "../../assets/Images/sticker-mule-logo-light.png";

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.sponsors = {
      platinum: {
        id: ["ASUCM", "MLH"],
        image: [ASUCM, MLH],
        url: ["https://asucm.ucmerced.edu/", "https://mlh.io/"]
      },
      gold: {
        id: [],
        image: [],
        url: []
      },
      silver: {
        id: ["Linode", "DigitalOcean", "Roche", "Founders"],
        image: [LINODE, DIGITALOCEAN, ROCHE, FOUNDERS],
        url: [
          "https://www.linode.com/",
          "https://digitalocean.com/",
          "https://roche.com/",
          "http://hackmerced.io"
        ]
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
          "CloudSploit",
          "MakeyMakey",
          "Egghead",
          "Desmos",
          "AoPS",
          "Bugsee",
          "Magoosh",
          "CITRIS",
          "Wolfram",
          "StickerMule"
        ],
        image: [
          SKETCH,
          MAKESCHOOL,
          PASSWORD,
          JETBRAINS,
          STICKERYOU,
          BALSAMIQ,
          CLERKY,
          CLOUDSPLOIT,
          MAKEYMAKEY,
          EGGHEAD,
          DESMOS,
          AOPS,
          BUGSEE,
          MAGOOSH,
          CITRIS,
          WOLFRAM,
          STICKERMULE
        ],
        url: [
          "https://www.sketch.com/",
          "https://www.makeschool.com/",
          "https://1password.com/",
          "https://www.jetbrains.com/",
          "https://www.stickeryou.com/",
          "https://balsamiq.com/",
          "https://www.clerky.com/",
          "https://cloudsploit.com/",
          "https://makeymakey.com/",
          "https://egghead.io/",
          "https://www.desmos.com/",
          "https://artofproblemsolving.com/",
          "https://www.bugsee.com/",
          "https://magoosh.com/",
          "https://citris.ucmerced.edu/",
          "https://www.wolframalpha.com/",
          "https://www.stickermule.com/"
        ]
      }
    };
  }

  createSponsors = ({ platinum, silver, bronze }, type) => {
    let sponsors = [];

    switch (type) {
      case "platinum": {
        for (let i = 0; i < platinum.id.length; ++i) {
          sponsors.push(
            <div className="sponsor" id={platinum.id[i]} key={i}>
              <a href={platinum.url[i]}>
                <img src={platinum.image[i]} alt={(platinum.id[i])} />
              </a>
            </div>
          );
        }
        break;
      }
      case "silver": {
        for (let i = 0; i < silver.id.length; ++i) {
          sponsors.push(
            <div className="sponsor" id={silver.id[i]} key={i}>
              <a href={silver.url[i]}>
                <img src={silver.image[i]} alt={(silver.id[i])} />
              </a>
            </div>
          );
        }
        break;
      }
      case "bronze": {
        for (let i = 0; i < bronze.id.length; ++i) {
          sponsors.push(
            <div className="sponsor" id={bronze.id[i]} key={i}>
              <a href={bronze.url[i]}>
                <img src={bronze.image[i]} alt={(bronze.id[i])} />
              </a>
            </div>
          );
        }
        break;
      }
      default:
        break;
    }

    return sponsors;
  };

  render() {
    return (
      <section id="sponsors">
        <h2>Sponsors</h2>
        <div id="sponsors-grid">
          <div id="platinum">
            {this.createSponsors(this.sponsors, "platinum")}
          </div>
          <div id="silver">
            {this.createSponsors(this.sponsors, "silver")}
          </div>
          <div id="bronze">
            {this.createSponsors(this.sponsors, "bronze")}
          </div>
        </div>
      </section>
    );
  }
}

export default Sponsors;
