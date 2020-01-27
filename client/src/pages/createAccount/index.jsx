import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Keccak } from "sha3";

import "./createAccount.scss";

const jwt = require("jsonwebtoken");

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        hashedPassword: "",
        phoneNumber: "",
        age: 18,
        gender: "",
        ethnicity: "",
        shirtSize: "",
        school: {
          schoolName: "",
          major: "",
          year: "",
          schoolStanding: "",
          graduationYear: 2021
        },
        dietaryRestrictions: "",
        specialNeeds: "",
        experience: {
          firstHackathon: true,
          resume: "",
          linkedIn: "",
          gitHub: "",
          devpost: ""
        },
        codeOfConduct: "",
        affiliationWithMLH: ""
      },
      formErrors: {
        email: "",
        password: ""
      },
      isEmailValid: false,
      isPasswordValid: false,
      doesEmailExist: false,
      isFormValid: false,
      hasUserTypedEmail: false,
      hasUserTypedPassword: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderEmailValid({ isEmailValid, hasUserTypedEmail, doesEmailExist }) {
    if (!isEmailValid && hasUserTypedEmail) {
      return (
        <div>
          <h5>Please enter a valid email.</h5>
        </div>
      );
    } else {
      if (doesEmailExist) {
        return (
          <div>
            <h5> this email is already taken </h5>
          </div>
        );
      }
    }
  }

  checkEmail(value) {
    axios({
      method: "get",
      url: "http://localhost:3852/api/attendees",
      data: {
        email: value
      }
    })
      .then(response => {
        this.setState({
          doesEmailExist:
            response.data.user !== "application does not exist" ? true : false
        });
      })
      .error(error => {
        console.error(error);
      });
  }

  renderPassValid({ hasUserTypedPassword, passwordValid }) {
    if (hasUserTypedPassword) {
      if (passwordValid === "medium strength") {
        return (
          <div>
            <h5>Medium Strength Password</h5>
            <h6>
              you can make this password stronger by adding a special character
              and an uppercase letter
            </h6>
          </div>
        );
      } else if (passwordValid === "strong strength") {
        return (
          <div>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <h5>Strong Strength Password 😊</h5>
          </div>
        );
      } else {
        return (
          <div>
            <h5>password must contain 1 letter, 1 number, and 1 symbol</h5>
          </div>
        );
      }
    }
  }

  hashMe(password, { passwordValid }) {
    if (passwordValid) {
      const hash = new Keccak(256);
      hash.reset();
      hash.update(password);
      const status = hash.digest("hex");
      hash.reset();
      const pepper = String.fromCharCode(
        Math.floor(Math.random() * (90 - 65 + 1) + 65)
      );
      hash.update(status).update(pepper);
      const temp = hash.digest("hex");
      return temp;
    }
  }

  validateForm({
    isEmailValid,
    isPasswordValid,
    hasUserTypedEmail,
    hasUserTypedPassword,
    doesEmailExist
  }) {
    this.setState({
      isFormValid:
        isEmailValid &&
        isPasswordValid &&
        hasUserTypedPassword &&
        hasUserTypedEmail &&
        !doesEmailExist
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.isFormValid) {
      axios({
        method: "post",
        url: "http://localhost:3852/api/attendees",
        data: state => ({
          ...state.user,
          first: this.state.firstName,
          last: this.state.lastName,
          email: this.state.email,
          hashedPassword: this.state.password
        })
      }).then(response => {
        const JWT_SECRET = response.data.secret;
        const token = jwt.sign({ email: this.state.email }, JWT_SECRET);

        sessionStorage.clear();
        sessionStorage.setItem("owl", token);
        sessionStorage.setItem("JWT", JWT_SECRET);
        this.props.history.push("/dashboard");
      });
    }
  }

  render() {
    return (
      <section id="create-account">
        <section id="create-account-title">
          <h2>Create Account</h2>
        </section>
        <form onSubmit={this.handleSubmit}>
          <section id="first-name">
            <label>First Name</label>
            <input
              type="text"
              name="first-name"
              required
              onChange={async event => {
                await this.setState(state => ({
                  user: {
                    ...state.user,
                    firstName: event.target.value
                  }
                }));

                await this.validateForm(this.state);
              }}
            />
          </section>
          <section id="last-name">
            <label>Last Name</label>
            <input
              type="text"
              name="last-name"
              required
              onChange={async event => {
                await this.setState(state => ({
                  user: {
                    ...state.user,
                    lastName: event.target.value
                  }
                }));

                await this.validateForm(this.state);
              }}
            />
          </section>
          <section id="email">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={async event => {
                await this.setState(state => ({
                  user: {
                    ...state.user,
                    email: event.target.value,
                    hasUserTypedEmail: true,
                    isEmailValid:
                      event.target.value.match(
                        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                      ) != null
                  }
                }));

                if (this.state.isEmailValid) {
                  await this.checkEmail(event.target.value);
                }

                await this.validateForm(this.state);
              }}
            />
            {this.renderEmailValid(this.state)}
          </section>
          <section id="password">
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={async event => {
                await this.setState(state => ({
                  user: {
                    ...state.user,
                    hashedPassword: this.hashMe(event.target.value, this.state),
                    hasUserTypedPassword: true,
                    isPasswordValid:
                      event.target.value.match(
                        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i
                      ) !== null
                        ? event.target.value.match(
                            // eslint-disable-next-line no-useless-escape
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i
                          )
                          ? "Strong Password"
                          : "Medium Password"
                        : false
                  }
                }));

                await this.validateForm(this.state);
              }}
            />
            {this.renderPassValid(this.state)}
          </section>
          <section id="submit">
            <button className="popup" type="submit">
              Create Account
            </button>
          </section>
        </form>
        <section className="login-text">
          <span>Have an account?</span>
          <span>
            <Link className="login-link" to="/login" title="Log in!">
              Log in!
            </Link>
          </span>
        </section>
      </section>
    );
  }
}

export default CreateAccount;
