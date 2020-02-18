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
import LLNL from "../../assets/Images/llnl.png";

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
        id: ["Founders", "Linode", "LLNL", "DigitalOcean", "Roche"],
        image: [FOUNDERS, LINODE, LLNL, DIGITALOCEAN, ROCHE],
        url: [
          "http://hackmerced.io",
          "https://digitalocean.com/",
          "https://www.llnl.gov/",
          "https://www.linode.com/",
          "https://roche.com/",
        ]
      },
      bronze: {
        id: [
          "MakeSchool",
          "Sketch",
          "OnePassword",
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
          MAKESCHOOL,
          SKETCH,
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
          "https://www.makeschool.com/",
          "https://www.sketch.com/",
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
    let sponsors = [],
    tier = (type === "platinum") ? platinum : ((type === "silver") ? silver : bronze);

    for (let i = 0; i < tier.id.length; ++i) {
      sponsors.push(
        <div className="sponsor" id={tier.id[i]} key={i}>
          <a href={tier.url[i]}>
            <img src={tier.image[i]} alt={(tier.id[i])} />
          </a>
        </div>
      );
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
