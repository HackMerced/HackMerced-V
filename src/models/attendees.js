const mongoose = require("mongoose");
const uuidv4 = require("uuid/v4");
const Papa = require("papaparse");

Papa.parse(
  "https://raw.githubusercontent.com/MLH/mlh-policies/master/schools.csv",
  {
    download: false,
    complete: results => {
      universities = results.data.slice(1, results.data.length);
    }
  }
);

const attendeeSchema = new mongoose.Schema({
  id: {
    type: String,
    alias: "Unique id for attendee",
    default: uuidv4()
  },
  timestamp: {
    type: Object,
    alias: "TimeStamp when the Attendee submitted their application.",
    default: new Date()
  },
  firstName: {
    type: String,
    alias: "First Name",
    required: [true, "Attendee's first name is required!"],
    minlength: 3,
    default: ""
  },
  lastName: {
    type: String,
    alias: "Last Name",
    required: [true, "Attendee's last name is required!"],
    minlength: 3,
    default: ""
  },
  email: {
    type: String,
    alias: "Email Address",
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: [true, "Attendee's email is required!"],
    lowercase: true,
    default: ""
  },
  // password: {
  //   type: String,
  //   alias: "password",
  //   default: null,
  //   required: [true, " this is required"]
  // },
  phoneNumber: {
    type: String,
    alias: "Phone Number",
    match: /^[+0-9\s]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    default: "+1 (234) 567-8901",
    required: [true, "Attendee's phone number is required!"],
  },
  age: {
    type: Number,
    alias: "Age of Attendee",
    match: /^([0-9])(0)$/,
    default: 18,
    required: [true, "Attendee's age is required!"],
  },
  gender: {
    type: String,
    alias: "Attendee's Gender",
    lowercase: true,
    default: "",
    enum: ["male", "female", "other", ""],
    required: [true, "Attendee's gender is required!"],
  },
  ethnicity: {
    type: String,
    alias: "Attendee's ethnicity",
    default: "",
    lowercase: true,
    enum: [
      "american indian or alaskan native",
      "asian/pacific islander",
      "black or african american",
      "latino",
      "white/caucasion",
      "prefer not to answer",
      "other",
    ],
    required: [true, "Attendee's ethnicity is required!"],
  },
  shirtSize: {
    type: String,
    alias: "Shirt Size",
    lowercase: true,
    enum: ["xs", "s", "m", "l", "xl", ""],
    default: "m",
    required: [true, "Attendee's shirt size is required!"],
  },
  school: {
    type: Object,
    alias: "Attendee's Education Information",
    default: null,
    schoolName: {
      type: String,
      alias: "Name of the Educational Institution",
      lowercase: true,
      enum: universities,
      default: "",
      required: [true, "Attendee's school name is required!"],
    },
    major: {
      type: String,
      alias: "major in university",
      lowercase: true,
      default: "undeclared",
      required: [true, "Attendee's major is required!"],
    },
    year: {
      type: String,
      alias: "Year in Educational Institution",
      lowercase: true,
      enum: ["freshman", "sophomore", "junior", "senior", "five+"],
      default: "",
      required: [true, "Attendee's current year in school is required!"],
    },
    schoolStanding: {
      type: String,
      alias: "type of education pursuing",
      lowercase: true,
      enum: ["undergraduate", "graduate", "post doctorate"],
      default: "undergraduate",
      required: [true, "Attendee's school status is required!"],
    },
    graduationYear: {
      type: Number,
      alias: "year of graduation",
      default: 2020,
      required: [true, "Attendee's graduation year is required!"],
    }
  },
  dietaryRestrictions: {
    type: String,
    alias: "Attendee's Dietary Restrictions",
    lowercase: true,
    default: "",
  },
  specialNeeds: {
    type: String,
    alias: "Attendee's Special Needs like allergies",
    default: "N/A",
    lowercase: true,
  },
  experience: {
    type: Object,
    alias: "Attendee's Past Experience",
    default: null,
    firstHackathon: {
      type: Boolean,
      alias: "Is this their first hackathon",
      default: [true, "First time at a hackathon"],
    },
    numberOfPreviousHackathons: {
      type: Number,
      alias: "Number of previous hackathons",
      min: [0, "First time at a hackathon"],
      default: 0
    },
    languages: {
      type: [String],
      alias: "Array of Different Programming Languages",
      default: [],
      enum: [
        "java",
        "javascript",
        "typescript",
        "c",
        "c++",
        "c#",
        "go",
        "f#",
        "bash",
        "python",
        "latex",
        "assembly",
        "swift",
        "kotlin"
      ]
    },
    resume: {
      type: String,
      alias: "Link to Online Resume",
      lowercase: true,
      default: "",
      required: [true, "Attendee's resume link is required!"],
    },
    linkedIn: {
      type: String,
      alias: "Attendee's LinkedIn Portfolio",
      lowercase: true,
      default: "",
    },
    gitHub: {
      type: String,
      alias: "Attendee's GitHub Portfolio",
      lowercase: true,
      default: ""
    },
    devpost: {
      type: [String],
      alias: "Attendee's Devpost Portfolio",
      lowercase: true,
      default: ""
    }
  },
  // team: {
  //   type: Object,
  //   alias: "Does the Attendee have a team",
  //   default: null,
  //   myTeamInfo: {
  //     code: {
  //       type: String,
  //       alias: "Unique code for the team",
  //       default: null,
  //     },
  //     myTeamName: {
  //       type: String,
  //       alias: "Team Name",
  //       default: "No Team",
  //       lowercase: true,
  //     },
  //     myTeammates: {
  //       type: [String],
  //       alias: "Array of fellow teammates",
  //       default: [],
  //     }
  //   }
  // },
  status: {
    type: String,
    alias: "The current status of Attendee",
    default: "submitted",
    lowercase: true,
    enum: ["submitted", "accepted", "declined", "waitListed", "checkedIn"]
  },
  // privileges: {
  //   type: String,
  //   alias: "Which type or attendee are they?",
  //   default: "attendee",
  //   lowercase: true,
  //   enum: ["attendee", "volunteer", "mentor", "sponsor", "admin", "ADMIN"],
  // },
  // userSubmitApp: {
  //   type: Boolean,
  //   alias: "did the user submit the application?",
  //   default: false,
  // },
  codeOfConduct: {
    type: Boolean,
    alias: "I have read and agree to the MLH Code of Conduct.",
    default: true,
    enum: [true, false],
    required: [true, "Attendee's code of conduct agreement is required!"],
  },
  affiliationWithMLH: {
    type: Boolean,
    alias:
      "I further agree to the terms of both the MLH Contest Terms and Conditions and the MLH Privacy Policy.",
    default: true,
    enum: [true, false],
    required: [true, "Attendee's affiliation with MLH agreement is required!"],
  }
});

module.exports = mongoose.model("Attendees", attendeeSchema);
