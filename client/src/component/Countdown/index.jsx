import React, { Component } from 'react';
import "./countdown.scss";

export default class LiveCountdown extends Component {

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.getNewTimerState = this.getNewTimerState.bind(this);
    this.state = this.getNewTimerState();
  }

  getNewTimerState() {
    let diffMs = (new Date('March 1, 2020 09:00:00 PST') - new Date()); // milliseconds between now & Christmas

    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor(((diffMs % 86400000) / 3600000) + (diffDays*24)); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    let diffSecs = Math.round(((diffMs % 86400000) % 3600000) % 60000 / 1000); // seconds

    if(diffSecs < 0) {
      diffSecs = 0;
    }
    if(diffMins < 0) {
      diffMins = 0;
    }
    if(diffHrs < 0) {
      diffHrs = 0;
    }

    return {
      seconds: diffSecs, // responsible for the seconds
      minutes: diffMins, // responsible for the minutes
      hours: diffHrs, // responsible for the hours
      // days: diffDays, // responsible for the days
    };
  }

  tick() {
    this.setState(this.getNewTimerState());
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(this.tick, 1000);
  }

  render() {

    // If it is within 36 hours of the hackathon show the countdown. To enable the 36 hour check, replace 'true' with 'showTimer'
    const startTimer = (new Date() < new Date('February 26, 2020 21:00:00 PST')) ? false : true;

    if(startTimer)
      return (
        <div className="Timer transparent">
          <div className="time"><span>{this.state.hours}</span><br/>HRS</div>
          <div className="time"><span>{this.state.minutes}</span><br/>MINS</div>
          <div className="time"><span>{this.state.seconds}</span><br/>SECS</div>
        </div>
      );

    return (
      <div className="Timer">
        <div className="time"><span>{'36'}</span><br/>HRS</div>
        <div className="time"><span>{'0'}</span><br/>MINS</div>
        <div className="time"><span>{'0'}</span><br/>SECS</div>
      </div>
    );
  }
}
