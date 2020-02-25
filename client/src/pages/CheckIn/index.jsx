import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LOGO from "../../assets/Images/logo.png";
import "./checkin.scss";

class CheckIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  successToast = () => {
    toast("Successfully Checked In!", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-success",
      autoClose: 8000,
      draggable: false
    });
  };

  errorToast = () => {
    toast.error(
      "You have not signed up before, please go to the other table and sign up before checking in!",
      {
        position: toast.POSITION_TOP_CENTER,
        className: "toast-error",
        draggable: false
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get("http://localhost:3852/api/attendees", {
        params: {
          email: this.state.email
        }
      })
      .then(async response => {
        if (response.data.status === "Application Found!") {
          await this.successToast();
          await axios.patch("http://localhost:3852/api/attendees", {
            ...response.data.user,
            status: "checked in"
          })
        } else {
          this.errorToast();
        }
      })
      .catch(this.errorToast);
  };

  render() {
    return (
      <section id="CheckIn">
        <div id="CheckIn-container">
          <section id="CheckIn-title">
            <div id="CheckIn-logo">
              <img src={LOGO} width="20px" alt="HackMerced Logo" />
            </div>
            <div id="CheckIn-text">Check-In!</div>
          </section>
          <form onSubmit={this.handleSubmit}>
            <section id="email">
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
              />
            </section>
            <button type="submit">Check-In</button>
          </form>
        </div>
        <ToastContainer />
      </section>
    );
  }
}

export default CheckIn;
