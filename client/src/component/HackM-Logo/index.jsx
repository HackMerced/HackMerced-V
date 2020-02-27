import React from "react";

import "./hackm-logo.scss";
import HACKMLOGO from "./hackmerced.png";

class Logo extends React.Component {
  render() {
    return (
      <div className="App-Header" id="Header">
        {" "}
        {/* This code basically puts "Admin Dash"*/}
        <a href="http://hackmerced.io/">
          {" "}
          {/* Navigate to HackMerced website*/}
          <img className="hackmlogo" src={HACKMLOGO} alt="HackMerced" />
        </a>
      </div>
    );
  }
}
export default Logo;
