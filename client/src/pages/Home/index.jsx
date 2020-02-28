import React from "react";

import Title from "../../component/Title";
import Themes from "../../component/Themes";
import About from "../../component/About-Us";
import Schedule from "../../component/Schedule";
import FAQ from "../../component/FAQ";
import Sponsors from "../../component/Sponsors";

import "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <Themes />
        <About />
        <Schedule />
        <FAQ />
        <Sponsors />
      </React.Fragment>
    );
  }
}

export default Home;
