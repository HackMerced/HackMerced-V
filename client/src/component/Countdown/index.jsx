import React, { Component } from "react";

import "./countdown.scss";

class Countdown extends Component {
  render() {
    return (
      <div class="countdown">
        <div class="bloc-time hours" data-init-value="24">
          <span class="count-title">Hours</span>

          <div class="figure hours hours-1">
            <span class="top">2</span>
            <span class="top-back">
              <span>2</span>
            </span>
            <span class="bottom">2</span>
            <span class="bottom-back">
              <span>2</span>
            </span>
          </div>

          <div class="figure hours hours-2">
            <span class="top">4</span>
            <span class="top-back">
              <span>4</span>
            </span>
            <span class="bottom">4</span>
            <span class="bottom-back">
              <span>4</span>
            </span>
          </div>
        </div>

        <div class="bloc-time min" data-init-value="0">
          <span class="count-title">Minutes</span>

          <div class="figure min min-1">
            <span class="top">0</span>
            <span class="top-back">
              <span>0</span>
            </span>
            <span class="bottom">0</span>
            <span class="bottom-back">
              <span>0</span>
            </span>
          </div>

          <div class="figure min min-2">
            <span class="top">0</span>
            <span class="top-back">
              <span>0</span>
            </span>
            <span class="bottom">0</span>
            <span class="bottom-back">
              <span>0</span>
            </span>
          </div>
        </div>

        <div class="bloc-time sec" data-init-value="0">
          <span class="count-title">Seconds</span>

          <div class="figure sec sec-1">
            <span class="top">0</span>
            <span class="top-back">
              <span>0</span>
            </span>
            <span class="bottom">0</span>
            <span class="bottom-back">
              <span>0</span>
            </span>
          </div>

          <div class="figure sec sec-2">
            <span class="top">0</span>
            <span class="top-back">
              <span>0</span>
            </span>
            <span class="bottom">0</span>
            <span class="bottom-back">
              <span>0</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
