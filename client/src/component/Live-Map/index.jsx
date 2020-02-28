import React, { Component } from "react";

import "./live-map.scss";
import PARKING from "../../assets/Images/Parking.jpg";
import ROOMS from "../../assets/Images/Rooms.jpg";

class LiveMap extends Component {
  render() {
    return (
      <section id="live-map">
        <img id="live-parking" src={PARKING} alt="parking"/>
        <img id="live-rooms" src={ROOMS} alt="rooms"/>
      </section>
    );
  }
}

export default LiveMap;
