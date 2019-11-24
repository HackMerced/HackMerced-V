import React, { Component } from "react";
import { universities } from "../../constants/universities";

import "./signUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      password: "",
      myEmail: "",
      phoneNumber: "",
      University: "",
      HighSchool: "",
      Birthday: "",
      Gender: "",
      Ethnicity: "",
      Major: "",
      CollegeYear: "",
      ShirtSize: "",
      myDiet: "",
      myAllergies: "",
      resume: "",
      gitHub: "",
      LinkedIn: "",
      Devpost: ""
      // school standing: undergrad, grad, post doc
      // is this your first hackathon: yes or no
      // years of coding experience: <1, 1-2, 2-3, 3-4, 4-5, +5
      // special requests
      // change video and photo to https://github.com/MLH/mlh-policies/blob/master/data-sharing.md
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    function uniList() {
      let result = [];
      for (let i = 0; i < universities.length; i++) {
        result.push(<option value={universities[i]}>{universities[i]}</option>);
      }
      return result;
    }

    return (
      <div id="body">
        <div id="formID">
          <form>
            {/* First Name */}
            <div>
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
            {/* Last Name */}
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
            {/* Password */}
            <div>
              <label>
                Password <font color="red">*</font>
              </label>
              <input type="password" name="password"></input>
            </div>
            {/* Email */}
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
            {/* Phone Number */}
            <div>
              <label>
                Phone Number <font color="red">*</font>
              </label>
              <input
                type="number"
                name="phoneNumber"
                ref="name"
                placeholder="123-456-5432"
              ></input>
            </div>
            {/* First Hackathon */}
            <div>
              <lable>Is this your first hackathon?</lable>
              <input
                type="radio"
                id="firstYes"
                name="drone"
                value="yes"
              ></input>
              <lable>Yes</lable>
              <input
                type="radio"
                id="secondYes"
                name="drone"
                value="no"
              ></input>
              <span>No</span>
            </div>
            {/* University */}
            <div>
              <label>
                University <font color="red">*</font>
              </label>
              {/* <input type="text" name="University" ref="name" placeholder="If High Schooler, Choose Last Option"></input> */}
              <select>
                <option value="" disabled selected>
                  ---Select Option---
                </option>
                {uniList()}
              </select>
            </div>
            {/* High School */}
            <div>
              <label>High School</label>
              <input
                type="text"
                name="HighSchool"
                ref="name"
                placeholder="High School"
              ></input>
            </div>
            {/* Birthday npm install react-datepicker --save*/}
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
            {/* Gender */}
            <div>
              <label>
                Gender <font color="red">*</font>
              </label>
              {/* <input type="text" name="Gender" ref="name" placeholder="Male/Female/Other"></input> */}
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
            {/* Race/Ethnicity */}
            <div>
              <label>
                Race/Ethnicity <font color="red">*</font>
              </label>
              {/* <input type="text" name="Ethnicity" ref="name" placeholder="Race"></input> */}
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
            {/* Major */}
            <div>
              <label>College Major</label>
              <input
                type="text"
                name="CollegeMajor"
                ref="name"
                placeholder="Major"
              ></input>
            </div>
            {/* College Year */}
            <div>
              <label>Year In College</label>
              {/* <input type="text" name="CollegeYear" ref="name" placeholder="Freshman"></input> */}
              <select>
                <option value="" disabled selected>
                  ---Select Option---
                </option>
                <option value="Freshman">Freshman</option>
                <option value="Sophmore">Sophmore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="+5">+5</option>
                {/* //fix later */}
              </select>
            </div>
            {/* Graduation Date */}
            <div>
              <lable>Graduation Date</lable>
              <input
                type="date"
                name="GradDate"
                ref="name"
                placeholder="GradDate"
              ></input>
            </div>
            {/* school standing */}
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
            {/* T-Shirt Size */}
            <div>
              <label>
                T-Shirt Size <font color="red">*</font>
              </label>
              {/* <input type="text" name="ShirtSize" ref="name" placeholder="XS/S/M/L/XL"></input> */}
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
            {/* Dietary Restrictions */}
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
            {/* Allergies */}
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
            {/* Resume */}
            <div>
              <label>
                Résumé<font color="red">*</font>
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
            {/* GitHub */}
            <div>
              <label>GitHub</label>
              <input
                type="url"
                name="gitHub"
                ref="name"
                placeholder="github.com/yourusernamehere"
              ></input>
            </div>
            {/* LinkedIn */}
            <div>
              <label>LinkedIn</label>
              <input
                type="text"
                name="LinkedIn"
                ref="name"
                placeholder="LinkedIn"
              ></input>
            </div>
            {/* Devpost */}
            <div>
              <label>Devpost</label>
              <input
                type="text"
                name="Devpost"
                ref="name"
                placeholder="Idk"
              ></input>
            </div>
            {/* MLH Code of Conduct  */}
            <div>
              <h5>
                I have read and agree to the MLH Code of Conduct.{" "}
                <font color="red">*</font>
              </h5>
              <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                Code of Conduct
              </a>
              <input required type="checkbox" placeholder="Yes"></input>
              <span>Yes</span>
            </div>
            {/* {authorize to share} */}
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
            {/* Video and Photo Permission */}
            <div>
              <h5>
                I give permission to HackMerced to photograph and video-graph me
                for the purposes of promoting HackMerced in the future.{" "}
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
            {/* Apply Button */}
            <button class="popup" onclick="myFunction()">
              {" "}
              Submit!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
