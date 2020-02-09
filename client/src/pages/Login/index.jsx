import React from "react";
import { Link } from "react-router-dom";
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
      email: "",
      password: "",
      isEmailValid: false,
      isPasswordValid: false,
      incorrectLogin: false,
      passwordType: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hashMe(password) {
    //console.log("initial hashme: ", password)
    if (this.state.isPasswordValid) {
      const hash = new Keccak(256);
      hash.reset();
      hash.update(password);
      let temp = hash.digest("hex");
      console.log("valid password: ", temp);
      hash.reset();
      return temp;
    }
  }

  validateForm({ isEmailValid, isPasswordValid }) {
    this.setState({
      incorrectLogin: !(isEmailValid && isPasswordValid)
    });
  }

  validateUser({ email, password }) {
    console.log(`email: ${email}, password: ${password}`)
    axios({
      method: "get",
      url: "http://localhost:3852/api/attendees/authenticate",
      params: {
        email: email,
        password: password
      }
    })
      .then(response => {
      	console.log(response.data);
        console.log(`response: ${response}`)
        if (response.data.result === "correct") {
          const JWT_SECRET = response.data.secret;
          const token = jwt.sign({ email: this.state.email }, JWT_SECRET);
          sessionStorage.clear();
          sessionStorage.setItem("owl", token);
          sessionStorage.setItem("JWT", JWT_SECRET);
          this.props.history.push("/dashboard");
        } else {
          this.setState({
            incorrectLogin: true
          });
        }
      })
      .catch(error => console.error(error));
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit")

    if (!this.state.incorrectLogin) {
      console.log("valid login")
      this.validateUser(this.state);
    }
  }

  render() {
    return (
      <section id="login">
        <div id="login-container">
          <img src={LOGO} width="20px" alt="HackMerced Logo" />
          <h2 id="login-title">HackMerced V</h2>
          <form onSubmit={this.handleSubmit}>
            <section id="email">
              <label>Email</label>
              <input
                required
                type="email"
                name="email"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    ...state,
                    email: value,
                    incorrectLogin: false,
                    hasUserTypedEmail: true,
                    isEmailValid:
                      value.match(
                        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                      ) != null
                  }));

                  await this.validateForm(this.state);
                }}
              />
            </section>
            <section id="password">
              <label>Password</label>
              <input
                required
                type="password"
                name="usersAttemptedPassword"
                onChange={async event => {
                  let value = event.target.value;
                  let isPasswordValid = value.match(
                        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i
                      ) !== null
                        ? value.match(
                            // eslint-disable-next-line no-useless-escape
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i
                          )
                          ? true
                          : true
                        : false;

                  await this.setState(state => ({
                    ...state,
                    incorrectLogin: false,
                    hasUserTypedPassword: true,
                    isPasswordValid: isPasswordValid,
                    passwordType:
                      value.match(
                        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i
                      ) !== null
                        ? value.match(
                            // eslint-disable-next-line no-useless-escape
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i
                          )
                          ? "Strong Password"
                          : "Medium Password"
                        : false,
                    password: this.hashMe(value),
                  }));

                  await console.log("input password field: ", this.state.password);

                  await this.validateForm(this.state);
                }}
              />
            </section>
            {(this.state.email === "") ?
            	null
            : this.state.incorrectLogin ? (
              this.state.isEmailValid ? (
                (this.state.password === "") ? null : <span id="alert">Your Password is Incorrect!</span>
              ) : (
                <span id="alert">Your Email is Incorrect!</span>
              )
            ) : null}
            <section id="submit">
              <button className="popup" type="submit">
                Login
              </button>
            </section>
          </form>
          <section id="sign-up-text">
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
