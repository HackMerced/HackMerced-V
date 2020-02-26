import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "./navigation-bar.scss";
import "react-toastify/dist/ReactToastify.css";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.toast = "";
    this.redirect = this.redirect.bind(this);
  }

  warnToast = path => {
    toast("Leaving this page will wipe all fields!", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-success",
      autoClose: 5000,
      draggable: false,
      pauseOnHover: true,
      onOpen: this.setState({
        toast: true
      }),
      onClose: () => {
        this.setState({
          toast: false
        });

        return this.redirect(path);
      }
    });
  };

  redirect(path) {
    if (!this.toast) {
      window.location.href = path;
    }
  }

  render() {
    const isMobile = window.innerWidth <= 500;

    return (
      <header id="navigation-bar">
        <div>
          <a href="https://mlh.io/seasons/na-2020/events" id="banner">
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg"
              alt="Major League Hacking 2020 Hackathon Season"
            />
          </a>
        </div>
        <section id="navigation-items">
          <button
            className="navigation btn btn-orange btn-border-o"
            onClick={() => {
              return window.location.pathname === "/signUp"
                ? this.warnToast("/home#sponsors")
                : (window.location.href = "/home#sponsors");
            }}
          >
            <div className="link">Sponsors</div>
          </button>
          <button
            className="navigation btn btn-orange btn-border-o"
            onClick={() => {
              return window.location.pathname === "/signUp"
                ? this.warnToast("/home#faq")
                : (window.location.href = "/home#faq");
            }}
          >
            <div className="link">FAQ</div>
          </button>
          <button
            className="navigation btn btn-orange btn-border-o"
            onClick={() => {
              return window.location.pathname === "/signUp"
                ? this.warnToast("/home#schedule")
                : (window.location.href = "/home#schedule");
            }}
          >
            <div className="link">Schedule</div>
          </button>
          <button
            className="navigation btn btn-orange btn-border-o"
            onClick={() => {
              return window.location.pathname === "/signUp"
                ? this.warnToast("/home#about")
                : (window.location.href = "/home#about");
            }}
          >
            <div className="link">About Us</div>
          </button>
          <button
            className="navigation btn btn-orange btn-border-o"
            onClick={() => {
              return window.location.pathname === "/signUp"
                ? this.warnToast("/live")
                : (window.location.href = "/live");
            }}
          >
            <div className="link">Live</div>
          </button>
          {window.location.pathname !== "/home" ? (
            <button
              className="navigation btn btn-orange btn-border-o"
              onClick={() => {
                return window.location.pathname === "/signUp"
                  ? this.warnToast("/home")
                  : (window.location.href = "/home");
              }}
            >
              <div className="link">Home</div>
            </button>
          ) : null}
        </section>
        <ToastContainer />
      </header>
    );
  }
}

export default NavigationBar;
