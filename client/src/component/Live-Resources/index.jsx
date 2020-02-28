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
                    <ul>Domain.com provides all the domain services you need from registration to hosting to SSL certificates & beyond.</ul>
                    <ol href="https://stories.mlh.io/your-domain-com-amazon-web-services-powered-site-in-30-minutes-or-less-8828f524bb6a">Domain.com powered site in 30 minutes or less</ol>
                </div>

                {/* GITHUB */}
                <div class="logos">
                    <a href="https://education.github.com/students?utm_source=mlh" target="_blank" rel="noopener noreferrer">
                        <img src={Github}>
                        </img>
                    </a>
                </div>
                <div class="infos">
                    <ul>Millions of developers use GitHub to build personal projects, support their businesses, and work together on open source technologies.</ul>
                    <ol href="https://guides.github.com/activities/hello-world/">Learn to use GitHub</ol>
                </div>

                {/*UIPATH */}
                <div class="logos">
                    <a href="http://hackp.ac/uipath-download" target="_blank" rel="noopener noreferrer">
                        <img src={UiPath}>
                        </img>
                    </a>
                </div>
                <div class="infos">
                    <ul>Join the #AutomationFirst movement with UiPath, the leading platform in automation technology known as Robotic Process Automation (RPA). Create robots to automate repetitive tasks in your hacks. (Windows Only).</ul>
                    <ol href="http://hackp.ac/uipath-download">Download the UiPath Community Edition</ol>
                    <ol href="http://hackp.ac/robot-packs">Download a UiPath Robot Pack</ol>
                    <ol href="https://stories.mlh.io/make-robots-automate-your-life-or-at-least-your-email-d728342257e4">Make Robots Automate Your Life (or at Least Your Email)</ol>
                    <ol href="http://hackp.ac/uipath-forum">Join the UiPath Community Forum</ol>
                    <ol href="http://hackp.ac/uipathgo">Join UiPath Go! to gets answers and build ideas</ol>
                </div>


                {/*BLOCKSTACK */}
                <div class="logos">
                    <a href="http://hackp.ac/blockstack" target="_blank" rel="noopener noreferrer">
                        <img src={blockstack}>
                        </img>
                    </a>
                </div>
                <div class="infos">
                    <ul>Build blockchain-powered apps in as little as an hour. Everything you need, from auth to data storage, ready and in production. 100% Javascript — zero backend development.</ul>
                    <ol href="http://hackp.ac/blockstack-hackathon-guide">Blockstack Hackathon Guide</ol>
                    <ol href="http://hackp.ac/bs-api-docs">Blockstack API Docs</ol>
                    <ol href="http://hackp.ac/blockstack-apps">Popular Blockstack Apps</ol>
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
                    <ol href="https://radar.io/blog/radar-student-hackathon-playbook" target="_blank" rel="noopener noreferrer">Radar Student Hackathon Playbook</ol>
                    <ol href="https://mlh.io/?link=radar-api" target="_blank" rel="noopener noreferrer">Radar API Documentation</ol>
                    <ol href="https://mlh.io/?link=radar-sdk" target="_blank" rel="noopener noreferrer">Radar SDK Documentation</ol>
                </div>







            </section>
        );
    }
}

export default LiveResources;
