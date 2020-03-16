import React, { Component } from "react";

import "./live-resources.scss";
import GCP from "../../assets/Images/googleCloud.png"
import Domain from "../../assets/Images/Domain.com-logo.png"
import Github from "../../assets/Images/github.png"
import UiPath from "../../assets/Images/uipath.png"
import blockstack from "../../assets/Images/blockstack.png"
import mongodb from "../../assets/Images/mongodb.png"
import radar from "../../assets/Images/radar.png"


class LiveResources extends Component {
    render() {
        return (
            <section id="live-resources"><div class="container">
            {/* GCP */}
            <div class="card">
              <img src={GCP} alt="" />

              <h3 class="card-header">Up to $100 in Google Cloud credits</h3>
              <div className="divider"></div>
              <p class="card-text">
                  Bring your project to the next level using Google Cloud Platform's infinitely scalable virtual machines, world class databases and analytics, and powerful machine learning technologies.
              </p>
              <div className="divider"></div>
              <ul>

              <a href="https://cloud.google.com/products/" target="_blank" rel="noopener noreferrer">All Google Cloud Products & Services</a>
              <div></div>
              <a href="https://cloud.google.com/products/" target="_blank" rel="noopener noreferrer">Google Cloud Documentation</a>
              </ul>
              <div class="divider"></div>
              <a class="btn btn-default" href="https://cloud.google.com/?utm_source=MLH&utm_medium=print&utm_campaign=fall2018">Get Started with Google Cloud</a>
            </div>

            {/* Domain */}
            <div class="card">
              <img src={Domain} alt="" />

              <h3 class="card-header">1 Free Domain (.tech, .space, or .online) & 1 Year of Domain Privacy</h3>
              <div className="divider"></div>
              <p class="card-text">
              Domain.com provides all the domain services you need from registration to hosting to SSL certificates & beyond.
              </p>
              <div className="divider"></div>
              <a href="https://stories.mlh.io/your-domain-com-amazon-web-services-powered-site-in-30-minutes-or-less-8828f524bb6a" target="_blank" rel="noopener noreferrer">Domain.com powered site in 30 minutes or less</a>
              <div class="divider"></div>
              <a class="btn btn-default" href="https://stories.mlh.io/your-domain-com-amazon-web-services-powered-site-in-30-minutes-or-less-8828f524bb6a">Register your FREE domain</a>
            </div>
            {/* Github */}
            <div class="card">
              <img src={Github} alt="" />

              <h3 class="card-header">The GitHub Student Developer Pack gives hackers free access to the best developer tools, all in one place.</h3>
              <div className="divider"></div>
              <p class="card-text">
              Millions of developers use GitHub to build personal projects, support their businesses, and work together on open source technologies.
              </p>
              <div className="divider"></div>
              <a href="https://guides.github.com/activities/hello-world/" target="_blank" rel="noopener noreferrer">Learn to use GitHub</a>
              <div class="divider"></div>
              <a class="btn btn-default" href="https://education.github.com/students?utm_source=mlh">Get the GitHub Education Pack</a>
            </div>
            {/* UiPath */}
            <div class="card">
              <img src={UiPath} alt="" />

              <h3 class="card-header">Supercharge your hack with powerful automations. Sign up for free now!</h3>
              <div className="divider"></div>
              <p class="card-text">
              Join the #AutomationFirst movement with UiPath, the leading platform in automation technology known as Robotic Process Automation (RPA). Create robots to automate repetitive tasks in your hacks. (Windows Only).
              </p>
              <div className="divider"></div>
              <a href ="https://platform.uipath.com/portal_/register">Download the UiPath Community Edition</a>
              <div></div>
              <a href="https://connect.uipath.com/">Download a UiPath Robot Pack</a>
              <div></div>
              <a href="https://stories.mlh.io/make-robots-automate-your-life-or-at-least-your-email-d728342257e4">Make Robots Automate Your Life (or at Least Your Email)</a>
              <div></div>
              <a href="https://forum.uipath.com/">Join the UiPath Community Forum</a>
              <div></div>
              <a href="https://connect.uipath.com/marketplace">Join UiPath Go! to gets answers and build ideas</a>
              <div class="divider"></div>
              <a class="btn btn-default" href="https://platform.uipath.com/portal_/register">Create your robot now</a>
            </div>
          </div> </section>
        );
    }
}

export default LiveResources;
