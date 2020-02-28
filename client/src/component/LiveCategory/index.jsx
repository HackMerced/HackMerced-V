import React, { Component } from "react";

import "./live-category.scss";


class LiveCategory extends Component {
    render() {

        return (

            <div className="grid-container">
                    <div className="grid-item">
                    <h1 className="header">Social Good</h1>
                    <p className="content">Best hack that befits the largest number of people in the largest possible way.
                                1st Place: Anker Speaker per team member and Lifetime Package for Clerky.
                                2nd Place: Echo Flex per team member.
                    </p>
                </div>
                <div className="grid-item">
                    <h1 className="header">Health</h1>
                    <p className="content">Best hack that enhances the quality of life by enhances health.
                                1st Place: LETSCOMM smart watch per team member.
                                2nd Place: Yeti 26 oz insulated bottle per team member.
                    </p>
                </div>
                <div className="grid-item">
                    <h1 className="header">Sustainibility</h1>
                    <p className="content">Best hack that focuses on creating a sustainable society that protects natural resources while ensuring social justice and economic well being for all.
                                            1st Place: Anker PowerCord Slim 10,000mA per team member.
                                            2nd Place: Led light strips 20 ft per team member.
                    </p>
                </div>
                <div className="grid-item">
                    <h1 className="header">Moon Shot</h1>
                    <p className="content">Best hack that is the craziest, the most out-of-this-world project at HackMerced 2020. It doesn't need to fit any category. Take risks. Make the impossible.
                                           Two winners: Year subscription to Egghead.io, tutorials for badass web developers!
                    </p>
                </div>
                <div className="grid-item">
                    <h1 className="header"> Good Begineer Hack</h1>
                    <p className="content">Hackathons are meant for everyone, especially for first-time hackers. This prize is specific to hackers taking their first steps in the wonderful world of competitive hacking! Each winning team member will receive a Limited
                                        Edition Makey Makey Kit to automate your software and go above and beyond!
                    </p>
                </div>
                <div className="grid-item">
                    <h1 className="header">Good Hardware Hack</h1>
                    <p className="content">Hackers at their core tinkers. This prize is specific to hackers who embrace the ever-revolving bond between software and hardware. Each winning team member will receive an Arduino to concentrate on making 
                                           their ideas a reality. It’s the ultimate tinkering tool!
                    </p>
                </div>
                <div className="grid-item">
                    <h1 className="header">Best Design</h1>
                    <p className="content">Each winning team member would win an annual membership to Sketch, a 3D modeling computer program for a wide range of drawing applications into 
                                           fostering their inner creativity towards their real-world applications.
                    </p>
                </div>
            </div>
        );
    }
}


export default LiveCategory;