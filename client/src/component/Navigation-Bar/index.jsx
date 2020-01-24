import React from "react";
import { Link } from "react-router-dom";

import "./navigation-bar.scss";

class NavigationBar extends React.Component {
  render() {
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
          <a
                className="navigation"
                href="#sponsors"
                alt="Our Sponsors <3"
              >
              <button className="link btn btn-orange btn-border-o">
                    Sponsors
              </button>
          </a>

          {/* 
            <a
                className="navigation"
                href="#faq"
                alt=Frequently Asked Questions"
              >
              <button className="link btn btn-orange btn-border-o">
                    FAQ
              </button>
          </a>
           */}
           <a
              className="navigation"
              href="#schedule"
              alt="HackMerced Schedule"
            >
            <button className="link btn btn-orange btn-border-o">
                Schedule
            </button>
          </a>

          <a 
              className="navigation" 
              href="/#about" 
              alt="About Us!"
            >
            <button className="link btn btn-orange btn-border-o">
                About Us
            </button>
          </a>

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

export default NavigationBar;