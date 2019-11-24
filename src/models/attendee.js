const mongoose = require("mongoose");
const uniqid = require("uniqid");

const universities = require("../constants/universities");

const attendeeSchema = new mongoose.Schema({
  id: {
    type: String,
    alias: "Unique id for attendee",
    default: uniqid(),
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
    lowercase: true,
    minlength: 3,
  },
  last: {
    type: String,
    alias: "Last Name",
    required: [true, "Attendee's last name is required!"],
    lowercase: true,
    minlength: 3,
  },
  email: {
    type: String,
    alias: "Email Address",
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: [true, "Attendee's email is required!"],
    lowercase: true,
    minlength: 7,
  },
  phone: {
    type: String,
    alias: "Phone Number",
    match: /^[+0-9\s]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    required: [true, "Attendee's phone number is required"],
    minlength: 10,
  },
  school: {
    type: Object,
    alias: "Attendee's Education Information",
    required: [true, "Attendee's school listed is required"],
    level: {
      type: String,
      alias: "High School, College, or Boot Camp",
      default: "College",
      lowercase: true,
      enum: ["high school", "community college", "university", "boarding school", "coding boot camp"],
    },
    name: {
      type: String,
      alias: "Name of the Educational Institution",
      lowercase: true,
      enum: universities,
    },
    year: {
      type: String,
      alias: "Year in Educational Institution",
      lowercase: true,
      enum: ["first", "second", "third", "fourth", "five+"],
    },
  },
  age: {
    type: Number,
    alias: "Age of Attendee",
    match: /^([0-9])(0)$/,
    min: [13, "Too young"],
    max: [30, "Too old"],
    required: [true, "Attendee's age is required"],
  },
  gender: {
    type: String,
    alias: "Attendee's Gender",
    lowercase: true,
    enum: [
      "male",
      "female",
      "other",
    ],
    required: [true, "Attendee's Gender is required"],
  },
  dietary: {
    type: String,
    alias: "Attendee's Dietary Restrictions",
    lowercase: true,
    default: null,
  },
  needs: {
    type: String,
    alias: "Attendee's Special Needs",
    lowercase: true,
    default: null,
  },
  shirt: {
    type: String,
    alias: "Shirt Size",
    lowercase: true,
    enum: ["xs", "s", "m", "l", "xl"],
    required: [true, "Shirt size is required"],
  },
  experience: {
    type: Object,
    alias: "Attendee's Past Experience",
    hackathons: {
      type: Number,
      alias: "Number of previous hackathons",
      min: [0, "First time at a hackathon"],
      required: [true, "Number of previous hackathons are required"],
    },
    languages: {
      type: [String],
      alias: "Array of Different Programming Languages",
      default: null,
      enum: ["java", "javascript", "typescript", "c", "c++", "c#", "go", "f#", "bash", "python", "latex", "assembly", "swift"],
    },
  },
  team: {
    type: Object,
    alias: "Does the Attendee have a team",
    default: null,
    info: {
      code: {
        type: String,
        alias: "Unique code for the team",
        default: uniqid(),
        required: [true, "A team code is required"],
      },
      name: {
        type: String,
        alias: "Team Name",
        default: "No Team",
        lowercase: true,
      },
      teammates: {
        type: [String],
        alias: "Array of fellow teammates",
        default: [],
      }
    }
  },
  linkedin: {
    type: String,
    alias: "Attendee's LinkedIn Portfolio",
    lowercase: true,
  },
  github: {
    type: String,
    alias: "Attendee's GitHub Portfolio",
    lowercase: true,
  },
  sites: {
    type: String,
    alias: "Attendee's Other Websites",
    lowercase: true,
  },
  resume: {
    type: String,
    alias: "Link to Online Resume",
    lowercase: true,
  },
  status: {
    type: String,
    alias: "The current status of Attendee",
    default: "submitted",
    lowercase: true,
    enum: ["submitted", "accepted", "declined", "waitListed", "checkedIn"],
    required: [true, "Application status required"],
  },
  privileges: {
    type: String,
    alias: "Which type or attendee are they?",
    default: "attendee",
    lowercase: true,
    enum: ["attendee", "volunteer", "mentor", "sponsor", "admin", "ADMIN"],
    required: [true, "User privileges required"],
  }
});

module.exports = mongoose.model("Attendee", attendeeSchema);
