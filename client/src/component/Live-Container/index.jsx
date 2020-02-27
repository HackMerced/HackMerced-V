import React, { Component } from "react";

import "./live-container.scss";
import LiveSchedule from "../Live-Schedule";
import LiveMap from "../Live-Map";

class LiveContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: "active",
      map: "",
      categories: "",
      resources: ""
    };
  }

  render() {
    return (
      <section className="wrapper">
        <ul className="tabs">
          <li
            id="schedule-tab"
            className={this.state.schedule}
            onClick={event => {
              let id = event.target.id;

              this.setState(state => ({
                ...state,
                schedule: id === "schedule-tab" ? "active" : "",
                map: "",
                categories: "",
                resources: ""
              }));
            }}
          >
            Schedule
          </li>
          <li
            id="map-tab"
            className={this.state.map}
            onClick={event => {
              let id = event.target.id;

              this.setState(state => ({
                ...state,
                schedule: "",
                map: id === "map-tab" ? "active" : "",
                categories: "",
                resources: ""
              }));
            }}
          >
            Map
          </li>
          <li
            id="categories-tab"
            className={this.state.categories}
            onClick={event => {
              let id = event.target.id;

              this.setState(state => ({
                ...state,
                schedule: "",
                map: "",
                categories: id === "categories-tab" ? "active" : "",
                resources: ""
              }));
            }}
          >
            Categories
          </li>
          <li
            id="resources-tab"
            className={this.state.resources}
            onClick={event => {
              let id = event.target.id;

              this.setState(state => ({
                ...state,
                schedule: "",
                map: "",
                categories: "",
                resources: id === "resources-tab" ? "active" : ""
              }));
            }}
          >
            Resources
          </li>
        </ul>
        <ul className="tab__content">
          <li id="schedule-tab-content" className={this.state.schedule}>
            {this.state.schedule === "active" ? <LiveSchedule/> : null}
          </li>
          <li id="map-tab-content" className={this.state.map}>
            {this.state.map === "active" ? <LiveMap/> : null}
          </li>
          <li id="categories-tab-content" className={this.state.categories}>

          </li>
          <li id="resources-tab-content" className={this.state.resources}>

          </li>
        </ul>
      </section>
    );
  }
}

export default LiveContainer;
