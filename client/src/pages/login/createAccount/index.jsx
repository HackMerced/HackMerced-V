import React from "react";
import "./createAccount.css";
import { Link, Redirect } from "react-router-dom"; //Links Library from React Router
import axios from 'axios';
import { Keccak } from 'sha3';
const uuidv4 = require('uuid/v4');

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userEmail: "",
      userPassword: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const object = target.name;
    const targetType = target.type;
    this.validateField(object, value);

    this.setState(
      {
        [object]: object === "userPassword" ? this.hashMe(value) : value,
      }
    );
  }

  hashMe(pass) {
    const hash = new Keccak(256);
    hash.reset();
    hash.update(pass);
    const status = hash.digest('hex');
    hash.reset();
    const pepper = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65));
    hash.update(status).update(pepper);
    const temp = hash.digest('hex');
    return temp;
  }

  validateField(fieldName, value) {
    let fieldValidation = this.state.formErrors;
    let emailValid = false;
    let passwordValid = false;

    switch (fieldName) {
      case "userEmail":
        var emailStrength = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        console.log(emailStrength);
        fieldValidation.email = (emailStrength != null) ? "" : "is invalid";
        break;
      case "userPassword":
        var mediumStrength = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i);
        var strongStrength = value.match(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i);
        if(mediumStrength != null){
          fieldValidation.password = "medium strength";
          if(strongStrength != null){
            fieldValidation.password = "strong strength";
          }
        }else{
          fieldValidation.password = "invalid";

        }
        break;
    }
    this.setState(
      {
        formErrors: fieldValidation,
        emailValid:  (fieldValidation.email === ""),
        passwordValid: ((fieldValidation.password === "medium strength") ||  (fieldValidation.password === "strong strength"))
      },
      () => {
        this.validateForm();
      }
    );
  }

  validateForm() {
    this.setState({
      formValid: (this.state.emailValid && this.state.passwordValid)
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  properRedirect() {
    this.props.history.push("/admin");
  }

  render() {
    return (
      <div className="App-login">
        <article className="center-the-login">
          <section className="login-title">
            <h2>Login</h2>
          </section>
          <main>
            <form onSubmit={this.handleSubmit}>
             <section className="login-firstName">
                {/* Email Section */}
                <p>First Name</p>
              <input
                type="text" //This will prompt the user for a valid email before submitting form (client side).
                style={{ width: 200 }}
                name="firstName"
                value={this.state.value}
                onChange={this.handleChange}
                required
              />
              </section>
               <section className="login-lastName">
                {/* Email Section */}
                <p>Last Name</p>
              <input
                type="text" //This will prompt the user for a valid email before submitting form (client side).
                style={{ width: 200 }}
                name="lastName"
                value={this.state.value}
                onChange={this.handleChange}
                required
              />
              </section>
              <section className="email">
                {/* Email Section */}
                <p>Email</p>
              <input
                type="email" //This will prompt the user for a valid email before submitting form (client side).
                id="user"
                style={{ width: 200 }}
                name="userEmail"
                value={this.state.value}
                onChange={this.handleChange}
                required
              />
              </section>
              {/* Email input box */}
              <section className="pass">
                {/* Password Section */}
                <p>Password</p>
              <input
                type="password"
                id="pass"
                style={{ width: 200 }}
                name="userPassword"
                //minLength="8"
                value={this.state.value}
                onChange={this.handleChange}
                required
              />
              </section>
              {/* Hidden input Password */}
              <br></br>
              {/* Submit */}
              <input
                type="submit"
                style={{ width: 210 }}
                value="Create Account!"
              ></input>
              <br></br>
              <br></br>
            </form>
          </main>
          <span className="alert">Nope. Try Again.</span>
          <section className="login-text">
            {/* Create an Account Section*/}
            <span>Have an account?  </span>
            <span>
              <Link className="login-link" to="/login" title="Log in!">
                Log in!
              </Link>
            </span>
          </section>
        </article>
      </div>
    );
  }
}

export default CreateAccount;
