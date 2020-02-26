import React, { Component } from "react";

import "./live-container.scss";
import LiveSchedule from "../Live-Schedule";

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
    // $(document).ready(function() {
    //   // Variables
    //   var clickedTab = $(".tabs > .active");
    //   var tabWrapper = $(".tab__content");
    //   var activeTab = tabWrapper.find(".active");
    //   var activeTabHeight = activeTab.outerHeight();

    //   // Show tab on page load
    //   activeTab.show();

    //   // Set height of wrapper on page load
    //   tabWrapper.height(activeTabHeight);

    //   $(".tabs > li").on("click", function() {
    //     // Remove class from active tab
    //     $(".tabs > li").removeClass("active");

    //     // Add class active to clicked tab
    //     $(this).addClass("active");

    //     // Update clickedTab variable
    //     clickedTab = $(".tabs .active");

    //     // fade out active tab
    //     activeTab.fadeOut(250, function() {
    //       // Remove active class all tabs
    //       $(".tab__content > li").removeClass("active");

    //       // Get index of clicked tab
    //       var clickedTabIndex = clickedTab.index();

    //       // Add class active to corresponding tab
    //       $(".tab__content > li")
    //         .eq(clickedTabIndex)
    //         .addClass("active");

    //       // update new active tab
    //       activeTab = $(".tab__content > .active");

    //       // Update variable
    //       activeTabHeight = activeTab.outerHeight();

    //       // Animate height of wrapper to new tab height
    //       tabWrapper
    //         .stop()
    //         .delay(50)
    //         .animate(
    //           {
    //             height: activeTabHeight
    //           },
    //           500,
    //           function() {
    //             // Fade in active tab
    //             activeTab.delay(50).fadeIn(250);
    //           }
    //         );
    //     });
    //   });
    // });

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
