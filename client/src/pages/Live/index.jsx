import React, { Component } from "react";

import "./live.scss";
import Logo from "../../component/HackM-Logo";
import LiveContainer from "../../component/Live-Container";
import Twitter from "../../component/Twitter";
import Instagram from "../../component/Instgram";

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
        <section id="live-twitter">
          <Twitter/>
        </section>
        <section id="live-instagram">
          <Instagram/>
        </section>
        <section id="live-slack"></section>
        <section id="live-devpost">
          <button onClick={() => {window.location.href = "https://hackmerced-v.devpost.com"}}>Devpost Submission</button>
        </section>
        <section id="live-container">
          <LiveContainer />
        </section>
      </section>
    );
  }
}

export default Live;
