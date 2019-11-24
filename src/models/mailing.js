const mongoose = require("mongoose");
const uniqid = require("uniqid");

const mailingSchema = new mongoose.Schema({
  id: {
    type: String,
    alias: "Unique id for attendee",
    default: uniqid(),
  },
  timestamp: {
    type: Object,
    alias: "TimeStamp when the User submitted their email to be on our mailing list.",
    default: new Date(),
  },
  name: {
    type: String,
    alias: "Their Name",
    required: [true, "Users's name is required!"],
    lowercase: true,
  },
  email: {
    type: String,
    alias: "Email Address",
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: [true, "Users's email is required!"],
    lowercase: true,
  }
});

module.exports = mongoose.model("Mailing", mailingSchema);
