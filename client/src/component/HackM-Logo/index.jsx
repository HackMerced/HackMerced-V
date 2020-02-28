import React from "react";

import "./hackm-logo.scss";
import HACKMLOGO from "../../assets/Images/logo.png";

class Logo extends React.Component {
  render() {
    return (
      <div className="App-Header" id="Header">
        <a href="http://hackmerced.io/">
          <img className="hackmlogo" src={HACKMLOGO} alt="HackMerced" />
        </a>
      </div>
    );
  }
}
export default Logo;
