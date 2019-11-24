import React from "react";
import "./Schedule.css";

class Schedule extends React.Component {
  render() {
    return (
      <div id="Schedule-Background">
        <div id="Schedule-Body">
          <div id="Schedule-Title">Schedule</div>
          <div id="Schedule-Container">
            <ul className="timeline">
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Opening Ceremony</span>
                    <span className="time-wrapper">
                      <span className="time">8:00 AM</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Hacking Begins</span>
                    <span className="time-wrapper">
                      <span className="time">9:00 AM</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Lunch</span>
                    <span className="time-wrapper">
                      <span className="time">12:00 PM</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Dinner</span>
                    <span className="time-wrapper">
                      <span className="time">5:00 PM</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Hacking Ends</span>
                    <span className="time-wrapper">
                      <span className="time">9:00 PM</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Closing Ceremony</span>
                    <span className="time-wrapper">
                      <span className="time">9:30 PM</span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      // <div id="grad">
      //   <div id="Schedule-Title">
      //     <h1>Schedule</h1>
      //     <div id="Schedule-Body">
      //       <table id="Schedule">
      //         <tr>
      //           <td>8:00 - 9:00</td>
      //           <td>-- Opening Ceremony</td>
      //         </tr>
      //         <tr>
      //           <td>9:00 - 9:30</td>
      //           <td>-- Hacking Begins</td>
      //         </tr>
      //         <tr>
      //           <td>12:00 - 1:00</td>
      //           <td>-- Lunch</td>
      //         </tr>
      //         <tr>
      //           <td>5:00 - 6:00</td>
      //           <td>-- Dinner</td>
      //         </tr>
      //         <tr>
      //           <td>9:00 - 9:30</td>
      //           <td>-- Hacking Ends</td>
      //         </tr>
      //         <tr>
      //           <td>9:00 - 10:00</td>
      //           <td>-- Closing Ceremony</td>
      //         </tr>
      //       </table>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Schedule; //rending Main webpage
