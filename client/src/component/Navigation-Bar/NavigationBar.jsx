import React from "react";
import { Link } from "react-router-dom"; //Links Library from React Router

import "./navigation-bar.scss";

class NavigationBar extends React.Component {
  render() {
    return (
      <header id="navigation-bar">
        {/* Banner is sourced and clickable */}
        <Link to="https://mlh.io/seasons/na-2020/events" id="banner">
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg"
            alt="Major League Hacking 2020 Hackathon Season"
          />
        </Link>
        <section id="navigation-items">
          {/* RR link to Our Hackathon Schedule of home page */}
          <button className="navigation btn btn-orange btn-border-o">
            <Link
              id="schedule"
              className="link"
              to="/#schedule"
              title="HackMerced Schedule"
            >
              Schedule
            </Link>
          </button>
          {/* RR link to FAQ of home page */}
          <button className="navigation btn btn-orange btn-border-o">
            <Link
              id="faq"
              className="link"
              to="/#faq"
              title="Frequently Asked Questions"
            >
              FAQ
            </Link>
          </button>
          {/* RR link to About Us section of home page */}
          <button className="navigation btn btn-orange btn-border-o">
            <Link id="about" className="link" to="/#about-us" title="About Us!">
              About Us
            </Link>
          </button>
          {/* RR link to sponsors section of home page */}
          <button className="navigation btn btn-orange btn-border-o">
            <Link
              id="sponsors"
              className="link"
              to="/#sponsors"
              title="Our Sponsors <3"
            >
              Sponsors
            </Link>
          </button>
          {/* RR link to Our Hackathon Schedule of home page */}
          <button className="navigation btn btn-orange btn-border-o">
            <Link
              id="schedule"
              className="link"
              to="/login"
              title="HackMerced Schedule"
            >
              Login
            </Link>
          </button>
        </section>
      </header>
    );
  }
}

export default NavigationBar;
