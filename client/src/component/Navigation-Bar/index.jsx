import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./navigation-bar.scss";

class NavigationBar extends React.Component {
  render() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return null;
    } else {
      return (
        <header id="navigation-bar">
          <div>
            <a href="https://mlh.io/seasons/na-2020/events" id="banner">
              <img
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg"
                alt="Major League Hacking 2020 Hackathon Season"
              />
            </a>
          </div>
          <section id="navigation-items">
            <Link
              smooth
              className="navigation btn btn-orange btn-border-o"
              to="/#sponsors"
              alt="Our Sponsors <3"
            >
              <button className="link">Sponsors</button>
            </Link>
            <Link
              smooth
              className="navigation btn btn-orange btn-border-o"
              to="/#faq"
              alt="Frequently Asked Questions"
            >
              <button className="link">FAQ</button>
            </Link>
            <Link
              smooth
              className="navigation btn btn-orange btn-border-o"
              to="/#schedule"
              alt="HackMerced Schedule"
            >
              <button className="link">Schedule</button>
            </Link>
            <Link
              smooth
              className="navigation btn btn-orange btn-border-o"
              to="/#about"
              alt="About Us!"
            >
              <button className="link">About Us</button>
            </Link>
            {/*
           <button className="navigation btn btn-orange btn-border-o">
            <Link
              className="link"
              to="login"
              title="HackMerced Schedule"
            >
              Login
            </Link>
          </button>
        */}
          </section>
        </header>
      );
    }
  }
}

export default NavigationBar;
