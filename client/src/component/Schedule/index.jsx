import React from "react";
import "./Schedule.css";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["Check In", "Dinner", "Opening Ceremony", "Hacking Starts", "Midnight Snacks", "Breakfast", "Lunch", "Dinner", "Midnight Snacks", "Breakfast", "DevPost Submissions", "Hacking Ends", "Demos/Judging", "Closing Ceremony"],                      // add the name and time in order to each otehr with quotes "Opemning ceremony" first block of tiem should be "8:00 AM"
      time: ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "12:00 AM", "7:00 AM", "1:00 PM", "7:00 PM", "12:00 AM", "7:00 AM", "7:00 AM", "9:00 AM", "10:00 AM", "12:00 PM"]
    }
  }

  eventBlocks = () => {
    var schedule = [];
    for (var i = 0; i < this.state.name; ++i) {
      schedule.push(
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">{this.state.name[i]}</span>
              <span className="time-wrapper">
                <span className="time">{this.state.time[i]}</span>
              </span>
            </div>
          </div>
        </li>
      );
    }

    return schedule;
  }

  render() {
    return (
      <div id="Schedule-Background">
        <div id="Schedule-Body">
          <div id="Schedule-Title">Schedule</div>
          <div id="Schedule-Container">
            <ul className="timeline">
              {this.eventBlocks()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule; //rending Main webpage
