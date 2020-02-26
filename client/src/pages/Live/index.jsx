import React, { Component } from "react";

import "./live.scss";
import Logo from "../../component/HackM-Logo";
import LiveContainer from "../../component/Live-Container";

class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="live">
        <section id="live-logo">
          <Logo />
        </section>
        <section id="live-timer"></section>
        <section id="live-twitter"></section>
        <section id="live-slack"></section>
        <section id="live-devpost"></section>
        <section id="live-container">
          <LiveContainer />
        </section>
      </section>
    );
  }
}

export default Live;
