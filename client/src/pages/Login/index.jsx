import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Keccak } from "sha3";

import Returning from "../../component/Returning";
import LOGO from "../../assets/Images/logo.png";
import "./login.scss";

const jwt = require("jsonwebtoken");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userAttemptPassword: "",
      userKeepLoggedIn: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      incorrect: false,
      hasUserTypedPass: false,
      hasUserTypedEmail: false,
      backgroundDimensions: {
        width: 0,
        height: 0
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  async hashMe(password) {
    if (this.state.passwordValid) {
      const hash = new Keccak(256);
      await hash.reset();
      await hash.update(password);
      return await hash.digest("hex");
    }
  }

  validateEmail(fieldName, value) {
    this.setState({
      emailValid: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) != null
    });
  }

  validatePassword(fieldName, value) {
    if (
      value.match(
        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i
      ) != null
    ) {
      this.setState({ passwordValid: "medium strength" });
      if (
        value.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i
        ) != null
      ) {
        this.setState({ passwordValid: "strong strength" });
      }
    } else {
      this.setState({ passwordValid: false });
    }
  }

  renderIncorrect() {
    var incorrectAttempt = this.state.incorrect;
    if (incorrectAttempt) {
      return <span className="alert">Nope. That is Incorrect.</span>;
    }
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.hasUserTypedPass &&
        this.state.hasUserTypedEmail
    });
  }

  validateUser(attemptPassword) {
    axios({
      method: "post",
      url: "http://localhost:3852/api/attendees/c",
      data: {
        email: this.state.userEmail,
        attemptPassword: attemptPassword
      }
    }).then(response => {
      if (response.data.result === "correct") {
        //console.log(response.data.secret)
        const JWT_SECRET = response.data.secret;
        //console.log(user);
        var token = jwt.sign({ mail: this.state.userEmail }, JWT_SECRET);
        //console.log(token);
        sessionStorage.clear();
        //console.log(sessionStorage.getItem('owl'));
        //console.log(sessionStorage.getItem('JWT'));
        sessionStorage.setItem("owl", token);
        sessionStorage.setItem("JWT", JWT_SECRET);
        //console.log(sessionStorage.getItem('owl'));
        this.props.history.push("/dashboard");
      } else {
        this.setState({
          incorrect: true
        });
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.state.formValid);
    if (this.state.formValid) {
      //console.log("made It");
      this.validateUser(this.state.userAttemptPassword);
    } else {
      this.setState({
        incorrect: true
      });
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const object = target.name;
    this.setState({ incorrect: false });

    if (object === "userAttemptPassword") {
      this.setState({ hasUserTypedPass: true });
      this.validatePassword(object, value);
    }

    this.setState({
      [object]: object === "userAttemptPassword" ? this.hashMe(value) : value
    });

    if (object === "userEmail") {
      this.setState({ hasUserTypedEmail: true });
      this.validateEmail(object, value);
    }

    this.validateForm();
  }

  render() {
    return (
      <section id="login" style={this.state.backgroundDimensions}>
        <div id="login-container">
          <img src={LOGO} width="20px" alt="HackMerced Logo" />
          <h2 id="login-title">HackMerced V</h2>
          <form onSubmit={this.handleSubmit}>
            <section id="email">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                required
              />
            </section>
            <section id="password">
              <label>Password</label>
              <input
                type="password"
                name="usersAttemptedPassword"
                onChange={this.handleChange}
                required
              />
            </section>
            <section id="submit">
              <button className="popup" type="submit">
                Submit!
              </button>
            </section>
          </form>
          <section className="signUp-text">
            <span>Don’t have an account?</span>
            <span>
              <Link id="sign-up-link" to="/create-account" title="Join Us!">
                Sign Up!
              </Link>
            </span>
          </section>
        </div>
      </section>
    );
  }
}

export default Login;
