import React from "react";
import { Link } from "react-router-dom"; //Links Library from React Router

import "./navigation-bar.scss";

class NavigationBar extends React.Component {
  render() {
    return (
      <header id="navigation-bar">
        <Link to="https://mlh.io/seasons/na-2020/events" id="banner">
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg"
            alt="Major League Hacking 2020 Hackathon Season"
          />
        </Link>
        <section id="navigation-items">
          <button className="navigation btn btn-orange btn-border-o">
            <Link
              className="link"
              to="#schedule"
              title="HackMerced Schedule"
            >
              Schedule
            </Link>
          </button>
          <button className="navigation btn btn-orange btn-border-o">
            <Link
              className="link"
              to="#faq"
              title="Frequently Asked Questions"
            >
              FAQ
            </Link>
          </button>
          <button className="navigation btn btn-orange btn-border-o">
            <Link className="link" to="#about" title="About Us!">
              About Us
            </Link>
          </button>
          <button className="navigation btn btn-orange btn-border-o">
            <Link
              className="link"
              to="#sponsors"
              title="Our Sponsors <3"
            >
              Sponsors
            </Link>
          </button>
          {/* <button className="navigation btn btn-orange btn-border-o">
            <Link
              className="link"
              to="login"
              title="HackMerced Schedule"
            >
              Login
            </Link>
          </button> */}
        </section>
      </header>
    );
  }
}

export default NavigationBar;
