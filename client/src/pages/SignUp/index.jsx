import React, { Component } from "react";
import axios from "axios";
import Papa from "papaparse";

import "./signUp.scss";

const jwt = require("jsonwebtoken");

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
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
      universities: [],
      defaultDisabled: true
    };

    this.uniList = this.uniList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.getCsvData();
    const jwtToken = sessionStorage.getItem("owl");
    const JWT_SECRET = sessionStorage.getItem("JWT");

    if (JWT_SECRET !== null && jwtToken !== null) {
      let decode = jwt.verify(jwtToken, JWT_SECRET);
      let email = decode.mail;

      axios({
        method: "get",
        url: "http://localhost:3852/api/attendees",
        data: {
          email: email
        }
      }).then(response => {
          this.setState({ user: { ...response.data.user }});
        }).error(error => {
          console.error(error);
        }
      );
    } else {
      this.props.history.push("/login");
    }
  }

  fetchCsv() {
    return fetch(
      "https://raw.githubusercontent.com/MLH/mlh-policies/master/schools.csv"
    ).then(response => {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(result => {
        return decoder.decode(result.value);
      });
    });
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();
    csvData += "Merced College";

    Papa.parse(csvData, {
      complete: this.setState({
        universities: csvData.data.slice(1, csvData.data.length).sort()
      }),
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

  handleSubmit = async event => {
    event.preventDefault();

    await axios({
      method: "patch",
      url: "http://hackmerced.io/api/attendees", 
      data: { 
        ...this.state.user, 
        status: "submitted" 
      }
    }).then(async response => {
      await console.log("Submitted Successfully: ", response);
      await this.props.history.push("/dashboard");
    }).error(error => console.error(error));
  };

  render() {
    return (
      <section id="body">
        <div id="formID">
          <form onSubmit={this.handleSubmit}>
            <h1 id="applications">Application</h1>
            <section id="first-name">
              <label>First Name</label>
              <input
                required
                type="text"
                name="first-name"
                ref="name"
                placeholder="First Name"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      firstName: value
                    }
                  }));
                }}
                defaultValue={this.state.user.firstName}
              ></input>
            </section>
            <section id="last-name">
              <label>Last Name</label>
              <input
                type="text"
                name="last-name"
                ref="name"
                placeholder="Last Name"
                required
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      lastName: value
                    }
                  }));
                }}
                defaultValue={this.state.user.lastName}
              ></input>
            </section>
            <section id="email">
              <label>Email</label>
              <input
                type="email"
                name="email"
                ref="name"
                placeholder="name@example.com"
                required
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      email: value
                    }
                  }));
                }}
                defaultValue={this.state.user.email}
              ></input>
            </section>
            <section id="phone-number">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone-number"
                ref="name"
                placeholder="123-456-7890"
                required
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      phoneNumber: value
                    }
                  }));
                }}
                defaultValue={this.state.user.phoneNumber}
              ></input>
            </section>
            <section id="age">
              <label>Age</label>
              <input
                type="number"
                name="age"
                ref="name"
                placeholder="18"
                required
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      age: Number(value)
                    }
                  }));
                }}
                defaultValue={this.state.user.age}
              ></input>
            </section>
            <section id="gender">
              <label>Gender</label>
              <select
                className="gender"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      gender: value
                    }
                  }));
                }}
                required
                defaultValue={
                  this.state.user.gender !== ""
                    ? this.state.user.gender
                    : "---Select Option---"
                }
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled}
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
            </section>
            <section id="ethnicity">
              <label>Ethnicity</label>
              <select
                className="ethnicity"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      ethnicity: value
                    }
                  }));
                }}
                uired
                defaultValue={
                  this.state.user.ethnicity !== ""
                    ? this.state.user.ethnicity
                    : "---Select Option---"
                }
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled}
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
            </section>
            <section id="first-hackathon">
              <label>Is this your first hackathon?</label>
              <select
                className="first-hackathon"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      experience: {
                        ...state.user.experience,
                        firstHackathon: value
                      }
                    }
                  }));
                }}
                defaultValue={
                  this.state.user.experience.firstHackathon
                    ? this.state.user.experience.firstHackathon
                    : "---Select Option---"
                }
                required
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled}
                >
                  Choose...
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </section>
            <section id="university">
              <label>University</label>
              <select
                className="university"
                name="school"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      school: {
                        ...state.user.school,
                        schoolName: value
                      }
                    }
                  }));
                }}
                required
                defaultValue={
                  this.state.user.school.schoolName !== ""
                    ? this.state.user.school.schoolName
                    : "---Select Option---"
                }
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled}
                >
                  Choose...
                </option>
                {this.uniList(this.state)}
              </select>
            </section>
            <section id="major">
              <label>College Major</label>
              <input
                type="text"
                name="major"
                ref="name"
                placeholder="Major"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      school: {
                        ...state.user.school,
                        major: value
                      }
                    }
                  }));
                }}
                defaultValue={this.state.user.school.major}
                required
              ></input>
            </section>
            <section id="year-in-college">
              <label>Year In College</label>
              <select
                className="year-in-college"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      school: {
                        ...state.user.school,
                        year: value
                      }
                    }
                  }));
                }}
                required
                defaultValue={
                  this.state.user.school.schoolStanding !== ""
                    ? this.state.user.school.schoolStanding
                    : "---Select Option---"
                }
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled}
                >
                  Choose...
                </option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="5+">5+</option>
              </select>
            </section>
            <section id="graduation-year">
              <label>Graduation Year</label>
              <input
                type="number"
                name="graduation-year"
                ref="name"
                placeholder="2021"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      school: {
                        ...state.user.school,
                        graduationYear: Number(value)
                      }
                    }
                  }));
                }}
                defaultValue={this.state.user.school.graduationYear}
                required
              ></input>
            </section>
            <section id="school-standing">
              <label>School Standing</label>
              <select
                className="school-standing"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      school: {
                        ...state.user.school,
                        schoolStanding: value
                      }
                    }
                  }));
                }}
                required
                defaultValue={
                  this.state.user.school.schoolStanding !== ""
                    ? this.state.user.school.schoolStanding
                    : "---Select Option---"
                }
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled}
                >
                  Choose...
                </option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="PostDoc">Post Doctorate</option>
              </select>
            </section>
            <section id="shirt-size">
              <label>T-Shirt Size</label>
              <select
                className="shirt-size"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      shirtSize: value
                    }
                  }));
                }}
                required
                defaultValue={
                  this.state.user.shirtSize !== ""
                    ? this.state.user.shirtSize
                    : "---Select Option---"
                }
              >
                <option
                  value="---Select Option---"
                  disabled={this.state.defaultDisabled}
                >
                  Choose...
                </option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </section>
            <section id="dietary-restrictions">
              <label>Dietary Restrictions</label>
              <input
                type="text"
                name="dietary-restrictions"
                ref="name"
                placeholder="No meat, no animal produce, or N/A"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      dietaryRestrictions: value
                    }
                  }));
                }}
                defaultValue={this.state.user.dietaryRestrictions}
              ></input>
            </section>
            <section id="special-needs">
              <label>Special Needs</label>
              <input
                type="text"
                name="special-needs"
                ref="name"
                placeholder="Speech Impairment... or N/A"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      specialNeeds: value
                    }
                  }));
                }}
                defaultValue={this.state.user.specialNeeds}
              ></input>
            </section>
            <section id="resume">
              <label>Resume</label>
              <input
                type="text"
                name="resume"
                ref="name"
                placeholder="Must upload a link that can be publicly viewed"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      experience: {
                        ...state.user.experience,
                        resume: value
                      }
                    }
                  }));
                }}
                defaultValue={this.state.user.experience.resume}
                required
              ></input>
            </section>
            <section id="github">
              <label>GitHub</label>
              <input
                type="url"
                name="github"
                ref="name"
                placeholder="github.com/username"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      experience: {
                        ...state.user.experience,
                        gitHub: value
                      }
                    }
                  }));
                }}
                defaultValue={this.state.user.experience.gitHub}
              ></input>
            </section>
            <section id="linked-in">
              <label>LinkedIn</label>
              <input
                type="url"
                name="linked-in"
                ref="name"
                placeholder="linkedin.com/in/username"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      experience: {
                        ...state.user.experience,
                        linkedIn: value
                      }
                    }
                  }));
                }}
                defaultValue={this.state.user.experience.linkedIn}
              ></input>
            </section>
            <section id="devpost">
              <label>Devpost</label>
              <input
                type="url"
                name="devpost"
                ref="name"
                placeholder="devpost.com/username"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      experience: {
                        ...state.user.experience,
                        devpost: value
                      }
                    }
                  }));
                }}
                defaultValue={this.state.user.experience.devpost}
              ></input>
            </section>
            <section id="code-of-conduct">
              <p id="conduct">
                I have read and agree to the{" "}
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
                  onChange={async event => {
                    let value = event.target.value;

                    await this.setState(state => ({
                      user: {
                        ...state.user,
                        firstName: value === "on" ? true : null
                      }
                    }));
                  }}
                  checked={this.state.user.codeOfConduct ? "on" : null}
                ></input>
                <span>I agree</span>
              </div>
            </section>
            <section id="affiliation-with-mlh">
              <p id="privacy">
                I authorize you to share my application/registration information
                for event administration, ranking, MLH administration, pre- and
                post-event informational e-mails, and occasional messages about
                hackathons in-line with the{" "}
                <a href="https://mlh.io/privacy">MLH Privacy Policy</a>. I
                further agree to the terms of both the{" "}
                <a href="https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions">
                  MLH Contest Terms and Conditions{" "}
                </a>
                and the <a href="https://mlh.io/privacy">MLH Privacy Policy</a>.
              </p>
              <div>
                <input
                  required
                  type="checkbox"
                  placeholder="Yes"
                  onChange={async event => {
                    let value = event.target.value;

                    await this.setState(state => ({
                      user: {
                        ...state.user,
                        firstName: value === "on" ? true : null
                      }
                    }));
                  }}
                  checked={this.state.user.affiliationWithMLH ? "on" : null}
                ></input>
                <span>I agree</span>
              </div>
            </section>
            <section id="submit">
              <button className="popup" type="submit">
                Submit!
              </button>
            </section>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;
