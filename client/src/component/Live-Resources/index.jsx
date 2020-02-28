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
            <div class="card">
              <img src={GCP} alt="" />

              <h3 class="card-header">Up to $100 in Google Cloud credits</h3>
              <div className="divider"></div>
              <p class="card-text">
                  Bring your project to the next level using Google Cloud Platform's infinitely scalable virtual machines, world class databases and analytics, and powerful machine learning technologies.
              </p>
              <div className="divider"></div>
              <a href="https://cloud.google.com/products/" target="_blank" rel="noopener noreferrer">All Google Cloud Products & Services</a>
              <div class="divider"></div>
              <a class="btn btn-default" href="https://cloud.google.com/?utm_source=MLH&utm_medium=print&utm_campaign=fall2018">Get Started with Google Cloud</a>
            </div>

            <div class="card">
              <img src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" alt="" />
              <h3 class="card-header">Example</h3>
              <p class="card-text">
                The column value stacks the flex items vertically
              </p>
              <div class="divider"></div>
              <a class="btn btn-default" href="#">Try it Yourself</a>
            </div>

            <div class="card">
              <img src="http://pluspng.com/img-png/spotify-logo-png-open-2000.png" alt="" />
              <h3 class="card-header">Example</h3>
              <p class="card-text">
                The column value stacks the flex items vertically
              </p>
              <div class="divider"></div>
              <a class="btn btn-default" href="#">Try it Yourself</a>
            </div>
          </div> </section>
        );
    }
}

export default LiveResources;
