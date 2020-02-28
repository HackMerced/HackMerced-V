import React, { Component } from "react";
import { Timeline } from 'react-twitter-widgets'

import "./twitter.scss";

class Twitter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section id="twitter">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "HackMerced"
          }}
          options={{
            username: "hackmerced",
            height: "400"
          }}
          onLoad={() => console.log("Timeline is loaded!")}
        />
      </section>
    );
  }
}

export default Twitter;
