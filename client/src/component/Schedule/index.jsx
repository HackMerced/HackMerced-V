import React from "react";

import "./schedule.scss";
import BACKGROUND from "../../assets/Images/schedule.png";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [
        "Check In",
        "Dinner",
        "Opening Ceremony",
        "Hacking Starts",
        "Hacking Ends",
        "Demos/Judging",
        "Closing Ceremony"
      ],
      time: [
        "6:00 PM",
        "7:00 PM",
        "8:00 PM",
        "9:00 PM",
        "9:00 AM",
        "10:00 AM",
        "12:00 PM"
      ],
      location: [
        "Outside COB 102",
        "In between SSB and SSM",
        "COB 102",
        "SSB First Floor",
        "SSB First Floor",
        "SSB 160",
        "COB 102"
      ]
    };
  }

  dayOne = ({time, name, location}) => {
    var schedule = [];
    for (var i = 0; i < 4; ++i) {
      schedule.push(
        <li key={i}>
          <div>
            <span className="event-time">{time[i]} - </span>
            <span className="event-name">{name[i]}</span>
            <br />
            <span className="event-location">{location[i]}</span>
          </div>
        </li>
      );
    }

    return schedule;
  };

  dayTwo = ({time, name, location}) => {
    var schedule = [];
    for (var i = 4; i < name.length; ++i) {
      schedule.push(
        <li key={i}>
          <div>
            <span className="event-time">{time[i]} - </span>
            <span className="event-name">{name[i]}</span>
            <br />
            <span className="event-location">{location[i]}</span>
          </div>
        </li>
      );
    }

    return schedule;
  };

  render() {
    return (
      <section id="schedule">
        <ul id="schedule-body">
          <li className="date">
            <h3>February 28th</h3>
          </li>
          <li className="events">
            <ul className="events-detail">{this.dayOne(this.state)}</ul>
          </li>
          <li className="date">
            <h3>March 1st</h3>
          </li>
          <li className="events cf">
            <ul className="events-detail">{this.dayTwo(this.state)}</ul>
          </li>
        </ul>
      </section>
    );
  }
}

export default Schedule;
