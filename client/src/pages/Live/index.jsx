import React, { Component } from "react";

import "./live.scss";
import Logo from "../../component/HackM-Logo";
import LiveContainer from "../../component/Live-Container";
import Twitter from "../../component/Twitter";
import Instagram from "../../component/Instagram";
import LiveCountdown from "../../component/Countdown";

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
        <section id="live-timer">
          <LiveCountdown timeTillDate="3 1 2020, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
        </section>
        <section id="live-feed">
        <h1>Live Feed</h1>
        </section>
        <section id="live-twitter">
          <Twitter/>
        </section>
        <section id="live-instagram">
          <Instagram/>
        </section>
        <section id="live-slack">
          <button id="submit" onClick={() => {window.location.href = "https://join.slack.com/t/hackmerced-v/shared_invite/enQtODUyNzkxMDY2NjkyLTZiODAyZjNiYTFjZTlkYTQ0NDVhOGQ5OTI3OTEzNjAxMDBiZTdjY2QyMTI0ZGE4MTlhMmNhMGYyNzQzOGNhZTI"}}>Slack</button>
        </section>
        <section id="live-devpost">
          <button id="submit" onClick={() => {window.location.href = "https://hackmerced-v.devpost.com/submissions"}}>Devpost Submission</button>
        </section>
        <section id="live-categories">
          <button id="submit" onClick={() => {window.location.href = "https://hackmerced-v.devpost.com/#prizes"}}>Prize Categories</button>
        </section>
        <section id="live-resources">
          <button id="submit" onClick={() => {window.location.href = "https://hack.mlh.io/software/"}}>Hacker Resources</button>
        </section>
        <section id="live-container">
          <LiveContainer />
        </section>
      </section>
    );
  }
}

export default Live;
