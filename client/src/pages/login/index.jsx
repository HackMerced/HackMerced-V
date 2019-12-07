import React from "react";
import "./login.css";
import { Link, Redirect } from "react-router-dom"; //Links Library from React Router
import axios from 'axios';
import { Keccak } from 'sha3';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      userKeepLoggedIn: false,
      formErrors: { email: "", password: "" },
      emailValid: false,
      //passwordValid: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    //console.log(target);
    //console.log(value);
    //console.log(name);
    this.setState(
      {
        [name]: name === "userPassword" ? this.hashMe(value) : value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  }

  hashMe(pass) {
    const hash = new Keccak(256);
    hash.reset();
    hash.update(pass);
    const status = hash.digest('hex');

    /*
        hash.reset();
        hash.update(status).update('Z');
        const temp = hash.digest('hex');
        console.log(temp);
    */

    return status;
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "userEmail":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "is invalid";
        break;
      /*
    case "userPassword":
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? "" : "is too short";
      break;
      */
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
      },
      () => {
        this.validateForm();
      }
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    const oldPass = this.state.userPassword;
    const hash = new Keccak(256);
    var isUserLoggedIn = false;
    for (var i = 65; i <= 122 && isUserLoggedIn === false; i++) { //122
      hash.reset();
      const attempt = String.fromCharCode(i);
      hash.update(oldPass).update(attempt);
      const newPass = hash.digest('hex');
      if (this.validateUser(this.state.userEmail, newPass)) {
        this.props.history.push("/admin");
        isUserLoggedIn = true;
      }
      console.log(newPass);
    }
    event.preventDefault();
  }

  properRedirect() {
    this.props.history.push("/admin");
  }

  validateUser(attemptEmail, attemptPassword) {
    const realUser = this.state.tempUser;
    const realPass = this.state.tempPass;
		/*
		axios.get(`/api/hacker/${email}`).then((response) => {
			console.log(response);
		})
		*/
    if (attemptEmail === realUser && attemptPassword === realPass) {
      console.log(true);
      return true;
    }
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
              <section className="email">
                {/* Email Section */}
                <p>Email</p>
              </section>
              <input
                type="email" //This will prompt the user for a valid email before submitting form (client side).
                id="user"
                style={{ width: 200 }}
                name="userEmail"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              {/* Email input box */}
              <section className="pass">
                {/* Password Section */}
                <p>Password</p>
              </section>
              <input
                type="password"
                id="pass"
                style={{ width: 200 }}
                name="userPassword"
                //minLength="8"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              {/* Hidden input Password */}
              <br></br>
              {/*}
              <section className="logged-In">
                {/* Keep me Logged in 
                <input
                  type="checkbox"
                  name="userKeepLoggedIn"
                  value={this.state.keepLoggedIn}
                  onChange={this.handleChange}
                />
                Keep me logged in
              </section>
              */}
              <br></br>
              <br></br>
              <input
                type="submit"
                style={{ width: 210 }}
                value="Lets Go!"
              ></input>
              {/* Submit */}
              <br></br>
              <br></br>
            </form>
          </main>
          <span className="alert">Nope. Try Again.</span>
          <section className="signUp-text">
            {/* Create an Account Section*/}
            <span>Don’t have an account?</span>
            <span>
              <Link className="signUp-link" to="/signup" title="Join Us!">
                Sign Up!
              </Link>
            </span>
          </section>
        </article>
      </div>
    );
  }
}

export default Login;
