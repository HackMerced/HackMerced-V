import React from "react";

import FAQ from "../../component/FAQ";
import About from "../../component/About-Us";
import Title from "../../component/Title";
import Schedule from "../../component/Schedule";
import Sponsors from "../../component/Sponsors";

import "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <About />
        <Schedule />
        {/* <FAQ /> */}
        {/* <Sponsors /> */}
      </React.Fragment>
    );
  }
}

export default Home;
