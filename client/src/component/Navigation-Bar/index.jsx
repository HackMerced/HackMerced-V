import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "./navigation-bar.scss";
import "react-toastify/dist/ReactToastify.css";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.toast = "";
    this.active = "";
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
    return (
      <header id="navigation-bar">
        <svg
          id="mobile-view"
          className={"ham ham3 " + this.active}
          viewBox="0 0 100 100"
          width="80"
          onClick={() => {
            this.setState({
              active: this.active === "" ? ".active" : ""
            });
          }}
        >
          <path
            className="line top"
            d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568"
          />
          <path
            className="line middle"
            d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7"
          />
          <path
            className="line bottom"
            d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0"
          />
        </svg>
        <section id="desktop-view">
          {window.location.pathname === "/live" ? null : (
            <section>
              <a href="https://mlh.io/seasons/na-2020/events" id="banner">
                <img
                  src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg"
                  alt="Major League Hacking 2020 Hackathon Season"
                />
              </a>
            </section>
          )}
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
        </section>
        <ToastContainer />
      </header>
    );
  }
}

export default NavigationBar;
