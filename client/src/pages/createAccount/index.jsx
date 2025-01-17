import React from "react";
import "./createAccount.css";
import { Link, Redirect } from "react-router-dom"; //Links Library from React Router
import axios from 'axios';
import { Keccak } from 'sha3';
const uuidv4 = require('uuid/v4');
var jwt = require('jsonwebtoken');

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
      doesEmailExist: false,
      formValid: false,
      hasUserTypedEmail: false,
      hasUserTypedPass: false,
      checkTheEmail: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderEmailValid(){
    var isEmailValid = this.state.emailValid;
    var hasUserTypedEmail = this.state.hasUserTypedEmail;
    var emailExist = this.state.doesEmailExist;
    if((isEmailValid === false) && hasUserTypedEmail){
        return(
          <div>
            <h5> please enter a valid email. </h5>
          </div>
          )
      }else{
      if(emailExist){
        return(
          <div>
             <h5> this email is already taken </h5>
           </div>
        )                  
      }
    }
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
          });
        }else{
          this.setState({
            doesEmailExist: false
          });
        }
    });
  }

  renderPassValid(){
   var hasUserTypedPass = this.state.hasUserTypedPass;
    var security = this.state.passwordValid;
    if(hasUserTypedPass){
      if(security === "medium strength"){
          return(
            <div>
            <h5>
            Medium Strength Password
            </h5>
            <h6>
              you can make this password stronger by adding a special character and an uppercase letter
            </h6>
            </div>
            )
        }else if(security === "strong strength"){
          return (
            <div>
            <h5>
            Strong Strength Password 😊
            </h5>
            </div>
            );
        }else{
          return(
            <div>
              <h5>
                password must contain 1 letter, 1 number, and 1 symbol
              </h5>
            </div>
            )
        }
    }
  }

  hashMe(pass) {
    var isPasswordValid = this.state.passwordValid;
    if(isPasswordValid){
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

  validateForm() {
    this.setState({
      formValid: (this.state.emailValid && this.state.passwordValid && this.state.hasUserTypedPass && this.state.hasUserTypedEmail && !(this.state.doesEmailExist))
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const object = target.name;
    const targetType = target.type;

    if(object === "userPassword"){
      this.setState({hasUserTypedPass: true});
      this.validatePassword(object, value);
    }
    this.setState(
      {
        [object]: object === "userPassword" ? this.hashMe(value) : value,
      }
    );
    if(object === "userEmail"){
      this.setState({hasUserTypedEmail: true});
      this.validateEmail(object,value);
    }
    this.validateForm();
  }

  handleSubmit(event) {
    event.preventDefault();
    var isFormValid = this.state.formValid;
    if(isFormValid){
    axios({
        method: "post",
        url: "http://localhost:3852/api/attendees",
        data: {
          "first": this.state.firstName,
          "last": this.state.lastName,
          "myEmail": this.state.userEmail,
          "myPassword": this.state.userPassword,
          "myPhone": "",
          "myAge": "",
          "myGender": "",
          "myEthnicity": "",
          "myShirt": "",
          "myDiet": "",
          "mySpecialNeeds": "",
          "mySchool": {
              "level": "university",
              "mySchoolName": "",
              "myMajor": "",
              "myYear": "",
              "mySchoolStanding": ""
          },
          "myExperience": {
              "hackathons": ""
          },
          "myResume": "",
          "myTeam": {
              "myTeamInfo": {
                  "code": "",
                  "myTeamName": "",
                  "myTeammates": []
              }
          },
          "myLinkedin": "",
          "myGithub": "",
          "userSubmitApp": false,
          "myPhotoPermissions": false
      }
      }).then(response =>{
        var user = response.data;
        const JWT_SECRET = response.data.secret;
        //console.log(user);
        var token = jwt.sign({ mail: this.state.userEmail }, JWT_SECRET);
        //console.log(token);
        sessionStorage.setItem('owl', token);
        //console.log(sessionStorage.getItem('owl'));
        //var jwtToken = sessionStorage.getItem('owl');
        //var decode = jwt.verify(jwtToken, JWT_SECRET);
        //console.log(decode.mail);
      });
    }
  }

  render() {
    return (
      <div className="App-login">
        <article className="center-the-login">
          <section className="login-title">
            <h2>Create Account</h2>
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
              {this.renderEmailValid()}
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
              {this.renderPassValid()}
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
