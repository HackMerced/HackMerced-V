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
            <section id="live-resources">

                {/* GCP */}
                <div class="logos">
                    <a href="https://cloud.google.com/?utm_source=MLH&utm_medium=print&utm_campaign=fall2018" target="_blank" rel="noopener noreferrer">
                        <img src={GCP}>
                        </img>
                    </a>
                </div>

                {/* DOMAIN.COM */}
                <div class="logos">
                    <a href="https://www.domain.com/mlh#consent-modal" target="_blank" rel="noopener noreferrer">
                        <img src={Domain}>
                        </img>
                    </a>
                </div>

                  {/* GITHUB */}
                  <div class="logos">
                    <a href="https://education.github.com/students?utm_source=mlh" target="_blank" rel="noopener noreferrer">
                        <img src={Github}>
                        </img>
                    </a>
                </div>

                {/*UIPATH */}
                <div class="logos">
                    <a href="http://hackp.ac/uipath-download" target="_blank" rel="noopener noreferrer">
                        <img src={UiPath}>
                        </img>
                    </a>
                </div>

    

                 {/*BLOCKSTACK */}
                 <div class="logos">
                    <a href="http://hackp.ac/blockstack" target="_blank" rel="noopener noreferrer">
                        <img src={blockstack}>
                        </img>
                    </a>
                </div>

                {/*MONGODB*/}
                <div class="logos">
                    <a href="http://hackp.ac/mongodb-signup" target="_blank" rel="noopener noreferrer">
                        <img src={mongodb}>
                        </img>
                    </a>
                </div>

             
             
          





            </section>
        );
    }
}

export default LiveResources;
