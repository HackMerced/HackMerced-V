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
      userKeepLoggedIn: false,
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

  hashMe(pass) {
    if(this.state.passwordValid){
      const hash = new Keccak(256);
      hash.reset();
      hash.update(pass);
      const status = hash.digest('hex');
      return status;
    }
  }

  validateEmail(fieldName, value){
    var emailValidation = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    this.setState({emailValid: (emailValidation != null)});
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
      formValid: (this.state.emailValid && this.state.passwordValid && this.state.hasUserTypedPass && this.state.hasUserTypedEmail)
    });
  }

  validateUser(attemptPassword) {
      axios({
        method: "post",
        url: "http://localhost:3852/api/attendees/c",
        data: {
        "myEmail": this.state.userEmail,
        "attemptPassword": attemptPassword
        }
      }).then(response =>{
        //console.log(response);
        var res = response.data.result;
        if(res === "correct"){
          //console.log(response.data.secret)
          const JWT_SECRET = response.data.secret;
          //console.log(user);
          var token = jwt.sign({ mail: this.state.userEmail }, JWT_SECRET);
          //console.log(token);
          sessionStorage.setItem('owl', token);
          //console.log(sessionStorage.getItem('owl'));
          this.props.history.push("/admin");
        }else{
          this.setState({
            incorrect: true
          });
        }
      });
    }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.state.formValid);
    if(this.state.formValid){
      //console.log("made It");
      this.validateUser(this.state.userAttemptPassword);
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
    this.setState({incorrect: false});
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
            <h1>Login</h1>
          </section>
          <main>
            <form onSubmit={this.handleSubmit}>
              <section className="email">
                {/* Email Section */}
              </section>
              <input
                type="email" //This will prompt the user for a valid email before submitting form (client side).
                id="user"
                placeholder="Email"
                style={{ width: 200 }}
                name="userEmail"
                value={this.state.value}
                onChange={this.handleChange}
                required
              />
              {/* Email input box */}
              <section className="pass">
                {/* Password Section */}
              </section>
              <input
                type="password"
                placeholder="password"
                id="pass"
                style={{ width: 200}}
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
                style={{ width: 210}}
                value="Submit"
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
