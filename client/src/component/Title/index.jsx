import React from "react";
import { Link } from "react-router-dom";

import "./title.scss";

class Title extends React.Component {
  render() {
    return (
      <div id="title">
        <section id="spacer"></section>
        <section id="content" >
          <div>
            <h1>HackMerced V</h1>
            <h3>February 28th - March 1st</h3>
            <button id="register">
              <div id="button">
                <div id="container">
                  <Link to="/signUp" id="btn">
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
