import React, { Component } from "react";
import axios from "axios";
import Papa from "papaparse";

import "./signUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      university: "",
      birthday: "",
      gender: "",
      ethnicity: "",
      major: "",
      collegeYear: "",
      shirtSize: "",
      dietary: "",
      allergies: "",
      resume: "",
      gitHub: "",
      linkedIn: "",
      devpost: "",
      schoolStanding: "",
      numberOfHackathon: "",
      codingExperience: "",
      universities: []
    };

    this.getData = this.getData.bind(this);
    this.uniList = this.uniList.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.getCsvData();
  }

  fetchCsv() {
    return fetch("https://raw.githubusercontent.com/MLH/mlh-policies/master/schools.csv").then(response => {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(function(result) {
        return decoder.decode(result.value);
      });
    });
  }

  getData(result) {
    this.setState({ universities: result.data.slice(1, result.data.length) });
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();

    Papa.parse(csvData, {
      complete: this.getData
    });
  }

  uniList({universities}) {
    let result = [];
    
    for (let i = 0; i < universities.length; i++) {
      result.push(<option value={universities[i]}>{universities[i]}</option>);
    }

    return result;
  }

  render() {
    return (
      <div id="body">
        <div id="formID">
          <form>
            <div>
              <h1>Application</h1>
              <label>
                First Name <font color="red">*</font>
              </label>
              <input
                required
                type="text"
                name="FirstName"
                ref="name"
                placeholder="First Name"
              ></input>
            </div>
            <div>
              <label>
                Last Name <font color="red">*</font>
              </label>
              <input
                type="text"
                name="LastName"
                ref="name"
                placeholder="Last Name"
              ></input>
            </div>
            <div>
              <label>
                Email <font color="red">*</font>
              </label>
              <input
                type="email"
                name="myEmail"
                ref="name"
                placeholder="name@example.com"
              ></input>
            </div>
            <div>
              <label>
                Password <font color="red">*</font>
              </label>
              <input
                type="password"
                name="password"
                ref="password"
                placeholder="Password"
              ></input>
            </div>
            <div>
              <label>
                Phone Number <font color="red">*</font>
              </label>
              <input
                type="number"
                name="phoneNumber"
                ref="name"
                placeholder="123-456-7890"
              ></input>
            </div>
            <div>
              <lable class="first-hackathon">
                Is this your first hackathon?
              </lable>
              <input
                type="radio"
                id="firstYes"
                name="drone"
                value="yes"
              ></input>
              <p>Yes</p>
              <input
                type="radio"
                id="secondYes"
                name="drone"
                value="no"
              ></input>
              <p>No</p>
            </div>
            <div>
              <label>
                University <font color="red"> * </font>
              </label>
              <select class="form control" name="school">
                <option value>---Select Option---</option>
                {this.uniList(this.state)}
              </select>
            </div>
            <div>
              <label>
                Date of Birth <font color="red">*</font>{" "}
              </label>
              <input
                type="date"
                name="Birthday"
                ref="name"
                placeholder="Birthday"
              ></input>
            </div>
            <div>
              <label>
                Gender <font color="red">*</font>
              </label>
              <select>
                <option value="" disabled selected>
                  ---Select Option---
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer Not To Answer">
                  Prefer not to Answer
                </option>
              </select>
            </div>
            <div>
              <label>
                Race/Ethnicity <font color="red">*</font>
              </label>
              <select>
                <option value="" disabled selected>
                  ---Select Option---
                </option>
                <option value="American Indian or Alaskan Native">
                  American Indian or Alaskan Native
                </option>
                <option value="Asian/Pacific Islander">
                  Asian/Pacific Islander
                </option>
                <option value="Black or African American">
                  Black or African American
                </option>
                <option value="Latino">Latino</option>
                <option value="White/Caucasion">White/Caucasion</option>
                <option value="Prefer Not To Answer">
                  Prefer Not To Answer
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label>College Major</label>
              <input
                type="text"
                name="CollegeMajor"
                ref="name"
                placeholder="Major"
              ></input>
            </div>
            <div>
              <label>Year In College</label>
              <select>
                <option value="" disabled selected>
                  ---Select Option---
                </option>
                <option value="Freshman">Freshman</option>
                <option value="Sophmore">Sophmore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="+5">+5</option>
              </select>
            </div>
            <div>
              <lable>Graduation Date</lable>
              <input
                type="date"
                name="GradDate"
                ref="name"
                placeholder="GradDate"
              ></input>
            </div>
            <div>
              <lable>School Standing</lable>
              <select>
                <option value="" disable selected>
                  ---Select Option---
                </option>
                <option value="undergrad">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="postDoc">Post Doctorate</option>
              </select>
            </div>
            <div>
              <label>
                T-Shirt Size <font color="red">*</font>
              </label>
              <select>
                <option value="" disabled selected>
                  ---Select Option---
                </option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div>
              <label>
                Dietary Restrictions <font color="red">*</font>
              </label>
              <input
                type="text"
                name="myDiet"
                ref="name"
                placeholder="No meat, no animal produce"
              ></input>
            </div>
            <div>
              <label>
                Allergies<font color="red">*</font>
              </label>
              <input
                type="text"
                name="myAllergies"
                ref="name"
                placeholder="Grass..."
              ></input>
            </div>
            <div>
              <label>
                Resume<font color="red">*</font>
              </label>
              <input
                type="file"
                name="resume"
                ref="name"
                placeholder=""
              ></input>
              <button type="button" onClick="">
                Upload
              </button>
            </div>
            <div>
              <label>GitHub</label>
              <input
                type="url"
                name="gitHub"
                ref="name"
                placeholder="github.com/yourusernamehere"
              ></input>
            </div>
            <div>
              <label>LinkedIn</label>
              <input
                type="text"
                name="LinkedIn"
                ref="name"
                placeholder="LinkedIn"
              ></input>
            </div>
            <div>
              <label>Devpost</label>
              <input
                type="text"
                name="Devpost"
                ref="name"
                placeholder="Idk"
              ></input>
            </div>
            <div>
              <h5>
                I have read and agree to the MLH Code of Conduct.
                <font color="red">*</font>
              </h5>
              <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                Code of Conduct
              </a>
              <input required type="checkbox" placeholder="Yes"></input>
              <span>Yes</span>
            </div>
            <div>
              <h5>
                I authorize you to share my application/registration information
                for event administration, ranking, MLH administration, pre- and
                post-event informational e-mails, and occasional messages about
                hackathons in-line with the MLH Privacy Policy. I further agree
                to the terms of both the MLH Contest Terms and Conditions and
                the MLH Privacy Policy.
                <font color="red">*</font>
              </h5>
              <a href="https://mlh.io/privacy, https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions">
                Privacy Policies
              </a>
              <input required type="checkbox" placeholder="Yes"></input>
              <span>Yes</span>
            </div>
            <div>
              <h5>
                I give permission to HackMerced to photograph and video-graph me
                for the purposes of promoting HackMerced in the future.
                <font color="red">*</font>
              </h5>
              <input
                name="drone"
                type="radio"
                value="yes"
                id="permissionYes"
              ></input>
              <span>Yes</span>
              <input
                name="drone"
                type="radio"
                value="no"
                id="permissionNo"
              ></input>
              <span>No</span>
            </div>
            <button class="popup" onclick="myFunction()">
              Submit!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
