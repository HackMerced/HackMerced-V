import React, {Component} from "react";

import "./live-schedule.scss";

class LiveSchedule extends Component {
  constructor(props) {
    super(props);
    this.schedule = {
      name: [
        "Check In Begins && Dinner is Served",
        "Opening Ceremony",
        "Hacking Starts",
        "Team Mixer",
        "Check-in Moves Location",
        "Midnight Snack",
        "UI/UX Workshop", // Athena
        "Rock Paper Scissors",
        "Arduino Workshop", // Busher
        "Breakfast",
        "Accelerometers and Gyroscopes Workshop by SHPE",
        "LinkedIn Professional Workshop by LinkedIn and ACM",
        "Lunch",
        "LLNL Workshop",
        "MLH Capture the Flag", // Sean
        "Dinner",
        "Calligraphy Workshop by the Japanese Club",
        "GCP Workshop", // Lorenzo
        "MLH Cupstacking", // Sean
        "Midnight Snack",
        "How to Deploy Your Project Workshop", // Adrian
        "Devpost Submissions",
        "Breakfast",
        "Hacking Ends",
        "Judging Starts",
        "Closing Ceremony",
      ],
      time: [
        "6:00 PM",
        "8:00 PM",
        "9:00 PM",
        "9:00 PM",
        "9:00 PM",
        "12:00 AM",
        "2:00 AM",
        "4:00 AM",
        "6:00 AM",
        "8:00 AM",
        "10:00 AM",
        "12:00 PM",
        "1:00 PM",
        "3:00 PM",
        "5:00 PM",
        "7:00 PM",
        "7:30 PM",
        "9:00 PM",
        "10:00 PM",
        "12:00 AM",
        "4:00 AM",
        "7:00 AM",
        "7:00 AM",
        "9:00 AM",
        "10:00 AM",
        "12:00 PM",
      ],
      location: [
        "Outside COB 102 && SSB 120",
        "COB 102",
        "",
        "COB 120",
        "SSB 160",
        "SSB 120",
        "SSB 110",
        "COB 129",
        "SSB 110",
        "SSB 120",
        "SSB 110",
        "SSB 110",
        "SSB 120",
        "SSB 110",
        "SSB 110",
        "SSB 120",
        "SSB 110",
        "SSB 110",
        "COB 129",
        "SSB 120",
        "SSB 110",
        "",
        "SSB 120",
        "",
        "SSB 160 && SSB 170",
        "COB 102",
      ]
    };
  }

  dayOne = ({time, name, location}) => {
    var schedule = [];
    for (var i = 0; i < 6; ++i) {
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
    for (var i = 6; i < 21; ++i) {
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


  dayThree = ({time, name, location}) => {
    var schedule = [];
    for (var i = 21; i < name.length; ++i) {
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
      <section id="live-schedule">
        <ul id="schedule-body">
          <li className="date">
            <h3>February 28th</h3>
          </li>
          <li className="events">
            <ul className="events-detail">{this.dayOne(this.schedule)}</ul>
          </li>
          <li className="date">
            <h3>February 29th</h3>
          </li>
          <li className="events">
            <ul className="events-detail">{this.dayTwo(this.schedule)}</ul>
          </li>
          <li className="date">
            <h3>March 1st</h3>
          </li>
          <li className="events cf">
            <ul className="events-detail">{this.dayThree(this.schedule)}</ul>
          </li>
        </ul>
      </section>
    );
  }
}

export default LiveSchedule;
