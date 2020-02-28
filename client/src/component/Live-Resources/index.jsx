import React, { Component } from "react";

import "./live-resources.scss";
import GCP from "../../assets/Images/googleCloud.png";
import Domain from "../../assets/Images/Domain.com-logo.png";
import Github from "../../assets/Images/github.png";
import UiPath from "../../assets/Images/uipath.png";
import blockstack from "../../assets/Images/blockstack.png";
import mongodb from "../../assets/Images/mongodb.png";
import radar from "../../assets/Images/radar.png";


function Card(props) {
  return (
    <ul>
      <li className="card-container">
        <div className="card-container--content">
          <h3 className="card-header--title">{props.heading}</h3>
          <span className="card-date">{props.date}</span>
          <p className="card-main--text">
            Hiss at vacuum cleaner. And sometimes switches in french and say
            "miaou" just because well why not throw down all the stuff in the
            kitchen for run off table persian cat jump.
          </p>
          <a href="#" className="card-button">
            Read more about
          </a>
        </div>
        <img className="card-image" src={props.src} alt="" />
      </li>
    </ul>
  );
}

function CardList(props) {
  return (
    <div className="card-masonry">
      <Card
        heading="Learning React"
        date="June 22, 2019"
        src="https://source.unsplash.com/user/erondu/320x320"
      />
      <Card
        heading="Beginning with JavaScript"
        date="June 20, 2019"
        src="https://source.unsplash.com/320x320"
      />
    </div>
  );
}


class LiveResources extends Component {
  render() {
    return (
      <section id="live-resources">
        <CardList />
      </section>
    );
  }
}

export default LiveResources;
