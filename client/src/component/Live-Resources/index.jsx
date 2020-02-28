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
                <div class="infos">
                    <ul></ul>
                    <ol href=""></ol>
                    <ol href=""></ol>
                    <ol href=""></ol>
                </div>
                
                {/* DOMAIN.COM */}
                <div class="logos">
                    <a href="https://www.domain.com/mlh#consent-modal" target="_blank" rel="noopener noreferrer">
                        <img src={Domain}>
                        </img>
                    </a>
                </div>
                <div class="infos">
                    <ul></ul>
                    <ol href=""></ol>
                    <ol href=""></ol>
                    <ol href=""></ol>
                </div>

                  {/* GITHUB */}
                  <div class="logos">
                    <a href="https://education.github.com/students?utm_source=mlh" target="_blank" rel="noopener noreferrer">
                        <img src={Github}>
                        </img>
                    </a>
                </div>
                <div class="infos">
                    <ul></ul>
                    <ol href=""></ol>
                    <ol href=""></ol>
                    <ol href=""></ol>
                </div>

                {/*UIPATH */}
                <div class="logos">
                    <a href="http://hackp.ac/uipath-download" target="_blank" rel="noopener noreferrer">
                        <img src={UiPath}>
                        </img>
                    </a>
                </div>
                <div class="infos">
                    <ul></ul>
                    <ol href=""></ol>
                    <ol href=""></ol>
                    <ol href=""></ol>
                </div>
    

                 {/*BLOCKSTACK */}
                 <div class="logos">
                    <a href="http://hackp.ac/blockstack" target="_blank" rel="noopener noreferrer">
                        <img src={blockstack}>
                        </img>
                    </a>
                </div>
                <div class="infos">
                    <ul></ul>
                    <ol href=""></ol>
                    <ol href=""></ol>
                    <ol href=""></ol>
                </div>

                {/*MONGODB*/}
                <div class="logos">
                    <a href="http://hackp.ac/mongodb-signup" target="_blank" rel="noopener noreferrer">
                        <img src={mongodb}>
                        </img>
                    </a>
                </div>
                <div class="infos">
                    <ul>MongoDB Atlas makes it easy to host data in the cloud. Deploy your hack with a full managed MongoDB instance across various cloud poviders like Google Cloud!</ul>
                    <ol href="http://hackp.ac/getting-started-with-mongodb">Getting started with MongoDB Atlas
</ol>
                    <ol href="http://hackp.ac/mongodb-sample-data">Sample Data for Atlas Clusters</ol>
                    <ol href="http://hackp.ac/mongodb-connect-cluster">Connecting to a MongoDB Atlas Cluster</ol>
                </div>

                {/*RADAR */}
                <div class="logos">
                    <a href="http://hackp.ac/radar" target="_blank" rel="noopener noreferrer">
                        <img src={radar}>
                        </img>
                    </a>
                </div>
                <div class="infos">
                    <ul>Radar is geofencing reinvented. Their developer-friendly, privacy-first SDKs and APIs will help you build amazing location-aware hacks!</ul>
                    <ol href="https://radar.io/blog/radar-student-hackathon-playbook"  target="_blank" rel="noopener noreferrer">Radar Student Hackathon Playbook</ol>
                    <ol href="https://mlh.io/?link=radar-api"  target="_blank" rel="noopener noreferrer">Radar API Documentation</ol>
                    <ol href="https://mlh.io/?link=radar-sdk"  target="_blank" rel="noopener noreferrer">Radar SDK Documentation</ol>
                </div>
             
          





            </section>
        );
    }
}

export default LiveResources;
