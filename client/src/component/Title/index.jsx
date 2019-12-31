import React from "react";
import { Link } from "react-router-dom";

import BACKGROUND from "../../assets/Images/Background.png";
import "./title.scss";

class Title extends React.Component {
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
      <div>
        <section id="spacer"></section>
        <section id="title" style={this.state}>
          <img src={BACKGROUND} alt="background" />
          <div>
            <h1>HackMerced V</h1>
            <h3>February 28th - March 1st</h3>
            <button id="register">
              <div id="button">
                <div id="container">
                  <Link to="/login" id="btn">
                    Register
                  </Link>
                </div>
              </div>
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Title;
