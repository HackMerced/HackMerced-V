import React, { Component } from "react";
import axios from "axios";
import Papa from "papaparse";
import { ToastContainer, toast } from "react-toastify";

import Loader from "../../component/Loader";
import "./signUp.scss";
import "react-toastify/dist/ReactToastify.css";

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
      defaultDisabled: true,
      loader: "Submit!"
    };

    this.getData = this.getData.bind(this);
    this.uniList = this.uniList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  successToast = () => {
    toast("Your application has been successfully submitted!", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-success",
      autoClose: 8000,
      draggable: false
    });
  };

  errorToast = () => {
    toast.error(
      "There was an error submitting your application, please try again!",
      {
        position: toast.POSITION_TOP_CENTER,
        className: "toast-error",
        draggable: false
      }
    );
  };

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

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      loader: ""
    });

    axios
      .post("http://hackmerced.io/api/attendees", {
        ...this.state.user,
        status: "submitted"
      })
      .then(response => {
        if (response.data.submitted === "Application successfully submitted!") {
          this.successToast();
          this.setState(state => ({
            ...state,
            loader: "Submitted!",
          }));
        } else {
          this.errorToast();
        }
      })
      .catch(this.errorToast)
      .finally(response => this.props.history.push("/"));
  };

  render() {
    return (
      <section id="body">
        <section id="formID">
          <form onSubmit={this.handleSubmit}>
            <section>
              <h1 id="applications">Application</h1>
              <label className="required">First Name</label>
              <input
                required
                type="text"
                id="first-name"
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
            <section>
              <label className="required">Last Name</label>
              <input
                type="text"
                id="last-name"
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
            <section>
              <label className="required">Email</label>
              <input
                type="email"
                id="email"
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
            <section>
              <label className="required">Phone Number</label>
              <input
                type="text"
                id="phone-number"
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
            <section>
              <label className="required">Age</label>
              <input
                type="number"
                id="age"
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
            <section>
              <label className="required">Gender</label>
              <select
                id="gender"
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
            <section>
              <label className="required">Ethnicity</label>
              <select
                id="ethnicity"
                onChange={async event => {
                  let value = event.target.value;

                  await this.setState(state => ({
                    user: {
                      ...state.user,
                      ethnicity: value
                    }
                  }));
                }}
                required
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
            <section>
              <label className="required">Is this your first hackathon?</label>
              <select
                id="first-hackathon"
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
            <section>
              <label className="required">University</label>
              <input
                list="universities"
                placeholder="Start typing..."
                id="university"
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
              ></input>
              <datalist id="universities" name="school">
                {this.uniList(this.state)}
              </datalist>
            </section>
            <section>
              <label className="required">College Major</label>
              <input
                type="text"
                id="major"
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
            <section>
              <label className="required">Year In College</label>
              <select
                id="year-in-college"
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
                  this.state.user.school.year !== ""
                    ? this.state.user.school.year
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
            <section>
              <label className="required">Graduation Year</label>
              <input
                type="number"
                id="graduation-year"
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
            <section>
              <label>School Standing</label>
              <select
                id="school-standing"
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
            <section>
              <label className="required">T-Shirt Size</label>
              <select
                id="shirt-size"
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
            <section>
              <label>Dietary Restrictions</label>
              <input
                type="text"
                id="dietary-restrictions"
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
            <section>
              <label>Special Needs</label>
              <input
                type="text"
                id="special-needs"
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
            <section>
              <label className="required">Resume</label>
              <input
                type="text"
                id="resume"
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
            <section>
              <label>GitHub</label>
              <input
                type="url"
                id="github"
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
            <section>
              <label>LinkedIn</label>
              <input
                type="url"
                id="linked-in"
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
            <section>
              <label>Devpost</label>
              <input
                type="url"
                id="devpost"
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
              <p id="conduct" className="required">
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
              <p id="privacy" className="required">
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
                {this.state.loader === "Submit!" ? (
                  this.state.loader
                ) : this.state.loader === "Submitted!" ? (
                  this.state.loader
                ) : (
                  <Loader />
                )}
              </button>
            </section>
          </form>
        </section>
        <ToastContainer />
      </section>
    );
  }
}

export default SignUp;
