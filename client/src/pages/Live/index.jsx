import React, { Component } from "react";

import "./live.scss";
import Logo from "../../component/HackM-Logo";
import LiveContainer from "../../component/Live-Container";
import Twitter from "../../component/Twitter";
import Instagram from "../../component/Instagram";
import LiveCountdown from "../../component/Countdown";


const Live = () => (
  <main className="live">
    <div className="live__container">
      <section className="live__logo">
        <Logo />
      </section>
      <section className="live__countdown">
        <LiveCountdown timeTillDate="3 1 2020, 7:00 am" timeFormat="MM DD YYYY, h:mm a" />
      </section>
      <div className="live__content">
        <section className="live__content__details">
          <LiveContainer />
        </section>
        <section className="live__content__social">
          <Twitter/>
          <Instagram/>
          <nav className="external-links">
            <a className="button" href="https://join.slack.com/t/hackmerced-v/shared_invite/enQtODUyNzkxMDY2NjkyLTZiODAyZjNiYTFjZTlkYTQ0NDVhOGQ5OTI3OTEzNjAxMDBiZTdjY2QyMTI0ZGE4MTlhMmNhMGYyNzQzOGNhZTI">Slack</a>
            <a className="button" href="https://hackmerced-v.devpost.com/submissions">Devpost Submission</a>
            <a className="button" href="https://hackmerced-v.devpost.com/#prizes">Prize Categories</a>
            <a className="button" href="https://hack.mlh.io/software/">Hacker Resources</a>
          </nav>
        </section>
      </div>
    </div>
  </main>
);


export default Live;
