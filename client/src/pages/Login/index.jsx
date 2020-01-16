import React from "react";

import Returning from '../../component/Returning';
import LOGO from '../../assets/Images/logo.png'
import "./login.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <section id="login" style={this.state}>
        <div id="login-container">
          <img src={LOGO} width="20px" alt="HackMerced Logo"/>
          <h2 id="login-title">HackMerced V</h2>
        </div>
      </section>
    );
  }
}

export default Home;
