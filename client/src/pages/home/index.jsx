import React from "react";

import Faq from "../../component/FAQ";
import AboutUs from "../../component/About-Us";
import Title from "../../component/Title";
import Schedule from "../../component/Schedule";
import Sponsors from "../../component/Sponsors";

import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Title />
          <Schedule />
          <Faq />
          <AboutUs />
          <Sponsors />
        </React.Fragment>
      </div>
    );
  }
}

export default Home;
