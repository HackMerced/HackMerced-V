const mongoose = require("mongoose");
const uuidv4 = require('uuid/v4');

const universities = require("../constants/universities");

const attendeeSchema = new mongoose.Schema({
  id: {
    type: String,
    alias: "Unique id for attendee",
    default: uuidv4(),
  },
  timestamp: {
    type: Object,
    alias: "TimeStamp when the Attendee submitted their application.",
    default: new Date(),
  },
  first: {
    type: String,
    alias: "First Name",
    required: [true, "Attendee's first name is required!"],
    minlength: 3,
    default: "",
  },
  last: {
    type: String,
    alias: "Last Name",
    required: [true, "Attendee's last name is required!"],
    minlength: 3,
    default: "",
  },
  myEmail: {
    type: String,
    alias: "Email Address",
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: [true, "Attendee's email is required!"],
    lowercase: true,
    default: "",
  },
  myPassword: {
    type: String,
    alias: "alohomora",
    default: null,
    required: [true, " this is required"]
  },
  myPhone: {
    type: String,
    alias: "Phone Number",
    match: /^[+0-9\s]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    default: "+1 (234) 567-8901",
  },
  myAge: {
    type: Number,
    alias: "Age of Attendee",
    match: /^([0-9])(0)$/,
    default: 0,
  },
  myGender: {
    type: String,
    alias: "Attendee's Gender",
    lowercase: true,
    default: "",
    enum: [
      "male",
      "female",
      "other",
      "",
    ],
  },
  myEthnicity: {
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
      "",
    ],
  },
  myShirt: {
    type: String,
    alias: "Shirt Size",
    lowercase: true,
    enum: ["xs", "s", "m", "l", "xl",""],
    default: "",
  },
  myDiet: {
    type: String,
    alias: "Attendee's Dietary Restrictions",
    lowercase: true,
    default: "",
  },
  mySpecialNeeds: {
    type: String,
    alias: "Attendee's Special Needs like allergies",
    default: "",
    lowercase: true,
    default: "",
  },
  mySchool: {
    type: Object,
    alias: "Attendee's Education Information",
    default: null,
    level: {
      type: String,
      alias: "High School, College, or Boot Camp",
      default: "university",
      lowercase: true,
      enum: ["high school", "community college", "university", "boarding school", "coding boot camp"],
    },
    mySchoolName: {
      type: String,
      alias: "Name of the Educational Institution",
      lowercase: true,
      enum: universities,
      default: "",
    },
    myMajor: {
      type: String,
      alias: "major in university",
      lowercase: true,
      default: "",
    },
    myYear: {
      type: String,
      alias: "Year in Educational Institution",
      lowercase: true,
      enum: ["freshman", "sophomore", "junior", "senior", "five+"],
      default: "",
    },
    mySchoolStanding: {
      type: String,
      alias: "type of education persuing",
      lowercase: true,
      enum: ["undergraduate", "graduate", "post doctorate"],
      default: "",
    },
  },
  myExperience: {
    type: Object,
    alias: "Attendee's Past Experience",
    default: null,
    hackathons: {
      type: Number,
      alias: "Number of previous hackathons",
      min: [0, "First time at a hackathon"],
      default: 0,
    },
    myLanguages: {
      type: [String],
      alias: "Array of Different Programming Languages",
      default: "",
      enum: ["java", "javascript", "typescript", "c", "c++", "c#", "go", "f#", "bash", "python", "latex", "assembly", "swift"],
    },
  },
  myResume: {
    type: String,
    alias: "Link to Online Resume",
    lowercase: true,
    default: "",
  },
  myTeam: {
    type: Object,
    alias: "Does the Attendee have a team",
    default: null,
    myTeamInfo: {
      code: {
        type: String,
        alias: "Unique code for the team",
        default: null,
      },
      myTeamName: {
        type: String,
        alias: "Team Name",
        default: "No Team",
        lowercase: true,
      },
      myTeammates: {
        type: [String],
        alias: "Array of fellow teammates",
        default: [],
      }
    }
  },
  myLinkedin: {
    type: String,
    alias: "Attendee's LinkedIn Portfolio",
    lowercase: true,
    default: "",
  },
  myGithub: {
    type: String,
    alias: "Attendee's GitHub Portfolio",
    lowercase: true,
    default: "",
  },
  mySites: {
    type: [String],
    alias: "Attendee's Other Websites",
    lowercase: true,
    default: [""],
  },
  myStatus: {
    type: String,
    alias: "The current status of Attendee",
    default: "application created",
    lowercase: true,
    enum: ["application created","submitted", "accepted", "declined", "waitListed", "checkedIn"],
  },
  myPrivileges: {
    type: String,
    alias: "Which type or attendee are they?",
    default: "attendee",
    lowercase: true,
    enum: ["attendee", "volunteer", "mentor", "sponsor", "admin", "ADMIN"],
  },
  userSubmitApp: {
    type: Boolean,
    alias: "did the user submit the application?",
    default: false,
  },
  myPhotoPermissions: {
    type: Boolean,
    alias: "can we post images of the applicant?",
    default: true,
  }
});

module.exports = mongoose.model("Attendees", attendeeSchema);
