import React, { Component } from "react";
import axios from "axios";
import Papa from "papaparse";

import "./signUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      age: 18,
      gender: "",
      ethnicity: "",
      shirtSize: "M",
      university: "",
      major: "",
      year: "",
      schoolStanding: "",
      graduationYear: 2020,
      dietaryRestrictions: "",
      specialNeeds: "",
      firstHackathon: true,
      resume: "",
      linkedIn: "",
      devpost: "",
      gitHub: "",
      codeOfConduct: true,
      affiliationWithMLH: true,
      universities: [],
      defaultDisabled: true
    };

    this.getData = this.getData.bind(this);
    this.uniList = this.uniList.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleEthnicityChange = this.handleEthnicityChange.bind(this);
    this.handleFirstHackathonChange = this.handleFirstHackathonChange.bind(
      this
    );
    this.handleUniversityChange = this.handleUniversityChange.bind(this);
    this.handleMajorChange = this.handleMajorChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleGraduationYearChange = this.handleGraduationYearChange.bind(
      this
    );
    this.handleSchoolStandingChange = this.handleSchoolStandingChange.bind(
      this
    );
    this.handleShirtSizeChange = this.handleShirtSizeChange.bind(this);
    this.handleDietaryRestrictionsChange = this.handleDietaryRestrictionsChange.bind(
      this
    );
    this.handleSpecialNeedsChange = this.handleSpecialNeedsChange.bind(this);
    this.handleResumeChange = this.handleResumeChange.bind(this);
    this.handleGitHubChange = this.handleGitHubChange.bind(this);
    this.handleLinkedInChange = this.handleLinkedInChange.bind(this);
    this.handleDevpostChange = this.handleDevpostChange.bind(this);
    this.handleCodeOfConductChange = this.handleCodeOfConductChange.bind(this);
    this.handleAffiliationWithMLHChange = this.handleAffiliationWithMLHChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.getCsvData();
  }

  fetchCsv() {
    return fetch(
      "https://raw.githubusercontent.com/MLH/mlh-policies/master/schools.csv"
    ).then(response => {
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

  uniList({ universities }) {
    let result = [];

    for (let i = 0; i < universities.length; i++) {
      result.push(
        <option value={universities[i]} key={i}>
          {universities[i]}
        </option>
      );
    }

    return result;
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePhoneNumberChange = event => {
    this.setState({
      phoneNumber: event.target.value
    });
  };

  handleAgeChange = event => {
    this.setState({
      age: event.target.value
    });
  };

  handleGenderChange = event => {
    this.setState({
      gender: event.target.value
    });
  };

  handleEthnicityChange = event => {
    this.setState({
      ethnicity: event.target.value
    });
  };

  handleFirstHackathonChange = event => {
    this.setState({
      firstHackathon: event.target.value
    });
  };

  handleUniversityChange = event => {
    this.setState({
      university: event.target.value
    });
  };

  handleSchoolStandingChange = event => {
    this.setState({
      schoolStanding: event.target.value
    });
  };

  handleMajorChange = event => {
    this.setState({
      major: event.target.value
    });
  };

  handleYearChange = event => {
    this.setState({
      year: event.target.value
    });
  };

  handleGraduationYearChange = event => {
    this.setState({
      graduationYear: event.target.value
    });
  };

  handleShirtSizeChange = event => {
    this.setState({
      shirtSize: event.target.value
    });
  };

  handleDietaryRestrictionsChange = event => {
    this.setState({
      dietaryRestrictions: event.target.value
    });
  };

  handleSpecialNeedsChange = event => {
    this.setState({
      specialNeeds: event.target.value
    });
  };

  handleResumeChange = event => {
    this.setState({
      resume: event.target.value
    });
  };

  handleLinkedInChange = event => {
    this.setState({
      linkedIn: event.target.value
    });
  };

  handleGitHubChange = event => {
    this.setState({
      gitHub: event.target.value
    });
  };

  handleDevpostChange = event => {
    this.setState({
      devpost: event.target.value
    });
  };

  handleCodeOfConductChange = event => {
    this.setState({
      codeOfConduct: event.target.value
    });
  };

  handleAffiliationWithMLHChange = event => {
    this.setState({
      affiliationWithMLH: event.target.value
    });
  };

  createUser({
    firstName,
    lastName,
    email,
    phoneNumber,
    age,
    university,
    major,
    year,
    schoolStanding,
    graduationYear,
    ethnicity,
    dietaryRestrictions,
    specialNeeds,
    gender,
    shirtSize,
    firstHackathon,
    codeOfConduct,
    affiliationWithMLH,
    resume,
    linkedIn,
    devpost,
    gitHub
  }) {
    return {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      age: age,
      gender: gender,
      ethnicity: ethnicity,
      shirtSize: shirtSize,
      school: {
        schoolName: university,
        major: major,
        year: year,
        schoolStanding: schoolStanding,
        graduationYear: graduationYear
      },
      dietaryRestrictions: dietaryRestrictions,
      specialNeeds: specialNeeds,
      experience: {
        firstHackathon: firstHackathon === "Yes" ? true : false,
        numberOfPreviousHackathons: 0,
        languages: [],
        resume: resume,
        linkedIn: linkedIn,
        gitHub: gitHub,
        devpost: devpost
      },
      codeOfConduct: codeOfConduct === "on" ? true : false,
      affiliationWithMLH: affiliationWithMLH === "on" ? true : false
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = this.createUser(this.state);

    console.log("before posting to DB: ", user);

    axios.post(`http://localhost:3852/api/attendees`, user).then(res => {
      console.log(res);
    });

    window.location.replace("http://hackmerced.io");
  };

  render() {
    return (
      <section id="body">
        <div id="formID">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1 id="applications">Application</h1>
              <label>First Name</label>
              <input
                required
                type="text"
                name="first-name"
                ref="name"
                placeholder="First Name"
                onChange={this.handleFirstNameChange}
              ></input>
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="last-name"
                ref="name"
                placeholder="Last Name"
                required
                onChange={this.handleLastNameChange}
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                ref="name"
                placeholder="name@example.com"
                required
                onChange={this.handleEmailChange}
              ></input>
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone-number"
                ref="name"
                placeholder="123-456-7890"
                required
                onChange={this.handlePhoneNumberChange}
              ></input>
            </div>
            <div>
              <label>Age</label>
              <input
                type="number"
                name="age"
                ref="name"
                placeholder="18"
                required
                onChange={this.handleAgeChange}
              ></input>
            </div>
            <div>
              <label>Gender</label>
              <select
                className="gender"
                onChange={this.handleGenderChange}
                required
                defaultValue={"---Select Option---"}
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled ? true : null}
                >
                  Choose...
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
              <label>Ethnicity</label>
              <select
                className="ethnicity"
                onChange={this.handleEthnicityChange}
                required
                defaultValue={"---Select Option---"}
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled ? true : null}
                >
                  Choose...
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
              <label>Is this your first hackathon?</label>
              <select
                className="first-hackathon"
                onChange={this.handleFirstHackathonChange}
                required
              >
                <option
                  value=""
                  disabled={this.state.defaultDisabled ? true : null}
                >
                  Choose...
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label>University</label>
              <select
                className="university"
                name="school"
                onChange={this.handleUniversityChange}
                required
                defaultValue={"---Select Option---"}
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled ? true : null}
                >
                  Choose...
                </option>
                {this.uniList(this.state)}
              </select>
            </div>
            <div>
              <label>College Major</label>
              <input
                type="text"
                name="major"
                ref="name"
                placeholder="Major"
                onChange={this.handleMajorChange}
                required
              ></input>
            </div>
            <div>
              <label>Year In College</label>
              <select
                className="yearincollege"
                onChange={this.handleYearChange}
                required
                defaultValue={"---Select Option---"}
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled ? true : null}
                >
                  Choose...
                </option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="5+">5+</option>
              </select>
            </div>
            <div>
              <label>Graduation Year</label>
              <input
                type="number"
                name="graduation-year"
                ref="name"
                placeholder="2021"
                onChange={this.handleGraduationYearChange}
                required
              ></input>
            </div>
            <div>
              <label>School Standing</label>
              <select
                className="schoolstanding"
                onChange={this.handleSchoolStandingChange}
                required
                defaultValue={"---Select Option---"}
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled ? true : null}
                >
                  Choose...
                </option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="PostDoc">Post Doctorate</option>
              </select>
            </div>
            <div>
              <label>T-Shirt Size</label>
              <select
                className="t-shirt"
                onChange={this.handleShirtSizeChange}
                required
                defaultValue={"---Select Option---"}
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled ? true : null}
                >
                  Choose...
                </option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div>
              <label>Dietary Restrictions</label>
              <input
                type="text"
                name="dietary-restrictions"
                ref="name"
                placeholder="No meat, no animal produce, or N/A"
                onChange={this.handleDietaryRestrictionChange}
                required
              ></input>
            </div>
            <div>
              <label>Special Needs</label>
              <input
                type="text"
                name="special-needs"
                ref="name"
                placeholder="Grass...or N/A"
                onChange={this.handleSpecialNeedsChange}
                required
              ></input>
            </div>
            <div>
              <label>Resume</label>
              <input
                type="text"
                name="resume"
                ref="name"
                placeholder="Must upload a link that can be publicly viewed"
                onChange={this.handleResumeChange}
                required
              ></input>
            </div>
            <div>
              <label>GitHub</label>
              <input
                type="url"
                name="github"
                ref="name"
                placeholder="github.com/username"
                onChange={this.handleGitHubChange}
              ></input>
            </div>
            <div>
              <label>LinkedIn</label>
              <input
                type="url"
                name="linked-in"
                ref="name"
                placeholder="linkedin.com/in/username"
                onChange={this.handleLinkedInChange}
              ></input>
            </div>
            <div>
              <label>Devpost</label>
              <input
                type="url"
                name="devpost"
                ref="name"
                placeholder="devpost.com/username"
                onChange={this.handleDevpostChange}
              ></input>
            </div>
            <div id="code-of-conduct">
              <p id="conduct">
                I have read and agree to the
                <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                  MLH Code of Conduct
                </a>
                .
              </p>
              <div>
                <input
                  required
                  type="checkbox"
                  placeholder="I agree"
                  onChange={this.handleCodeOfConductChange}
                ></input>
                <span>I agree</span>
              </div>
            </div>
            <div id="affiliation-with-mlh">
              <p id="privacy">
                I authorize you to share my application/registration information
                for event administration, ranking, MLH administration, pre- and
                post-event informational e-mails, and occasional messages about
                hackathons in-line with the
                <a href="https://mlh.io/privacy">MLH Privacy Policy</a>. I
                further agree to the terms of both the
                <a href="https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions">
                  MLH Contest Terms and Conditions
                </a>
                 and the <a href="https://mlh.io/privacy">MLH Privacy Policy</a>.
              </p>
              <div>
                <input
                  required
                  type="checkbox"
                  placeholder="Yes"
                  onChange={this.handleAffiliationWithMLHChange}
                ></input>
                <span>I agree</span>
              </div>
            </div>
            <div id="submit">
              <button className="popup" type="submit">
                Submit!
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;
