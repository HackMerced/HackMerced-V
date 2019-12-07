import React from "react";
import "./login.css";
import { Link, Redirect } from "react-router-dom"; //Links Library from React Router
import axios from 'axios';
import { Keccak } from 'sha3';
var jwt = require('jsonwebtoken');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userAttemptPassword: "",
      userPassword: "",
      userKeepLoggedIn: false,
      doesEmailExist: false,
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      incorrect: false,
      hasUserTypedPass: false,
      hasUserTypedEmail: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

checkEmail(value){
    axios({
        method: "post",
        url: "http://localhost:3852/api/attendees/q",
        data: {
        "myEmail": value
        }
      }).then(response =>{
        var user = response.data.user;
        //console.log(user);
        if(user !== "application does not exist"){
          this.setState({
            doesEmailExist: true,
            userPassword: user.myPassword
          });
        }else{
          this.setState({
            doesEmailExist: false
          });
        }
    });
  }

  hashMe(pass) {
    if(this.state.passwordValid){
      const hash = new Keccak(256);
      hash.reset();
      hash.update(pass);
      const status = hash.digest('hex');
      return status;
    }
  }

  setupToken(){
    axios({
        method: "patch",
        url: "http://localhost:3852/api/attendees",
        data: {
        "myEmail": this.state.email
        }
      }).then(response =>{
        const JWT_SECRET = response.data.secret;
        //console.log(user);
        var token = jwt.sign({ mail: this.state.userEmail }, JWT_SECRET);
        //console.log(token);
        sessionStorage.setItem('owl', token);
        //console.log(sessionStorage.getItem('owl'));
        this.props.history.push("/admin");

    });
  }

  validateEmail(fieldName, value){
    var emailValidation = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    this.setState({emailValid: (emailValidation != null)});
    if(emailValidation != null){
      this.checkEmail(value);      
    }
  }

  validatePassword(fieldName,value){
    var strongStrength = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i);
    var mediumStrength = value.match(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i);
    if(mediumStrength != null){
      this.setState({passwordValid: "medium strength"});
      if(strongStrength != null){
        this.setState({passwordValid: "strong strength"});
      }
    }else{
      this.setState({passwordValid: false});
    }
  }

  renderIncorrect(){
    var incorrectAttempt = this.state.incorrect;
    if(incorrectAttempt){
      return (
        <span className="alert">Nope. That is Incorrect.</span>
      );
    }
  }

  validateForm() {
    this.setState({
      formValid: (this.state.emailValid && this.state.passwordValid && this.state.hasUserTypedPass && this.state.hasUserTypedEmail && this.state.doesEmailExist)
    });
  }

  validateUser(attemptPassword) {
      if (attemptPassword === this.state.userPassword) {
        //console.log(true);
        return true;
      }
    }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.state.formValid);
    if(this.state.formValid){
      //console.log("made It");
      const oldPass = this.state.userAttemptPassword;
      const hash = new Keccak(256);
      for (var i = 65; i <= 122; i++) {
        hash.reset();
        const attempt = String.fromCharCode(i);
        //console.log(attempt);
        hash.update(oldPass).update(attempt);
        const newPass = hash.digest('hex');
        //console.log(newPass);
        if (this.validateUser(newPass)) {
          //console.log(newPass);
          this.setupToken();
        }
      }
    }else{
      this.setState({
        incorrect: true
      });
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const object = target.name;
    const targetType = target.type;

    if(object === "userAttemptPassword"){
      this.setState({hasUserTypedPass: true});
      this.validatePassword(object, value);
    }
    this.setState(
      {
        [object]: object === "userAttemptPassword" ? this.hashMe(value) : value,
      }
    );

    if(object === "userEmail"){
      this.setState({hasUserTypedEmail: true});
      this.validateEmail(object,value);
    }
    this.validateForm();
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
                value={this.state.value}
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
                name="userAttemptPassword"
                //minLength="8"
                value={this.state.value}
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
          {this.renderIncorrect()}
          <section className="signUp-text">
            {/* Create an Account Section*/}
            <span>Don’t have an account?</span>
            <span>
              <Link className="signUp-link" to="/create" title="Join Us!">
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
