const mongoose = require("mongoose");
const Attendees = require("./attendees");
const Team = require("./team");
const Mailing = require("./mailing");

const DB_URI =
  process.env.NODE_ENV === "development"
    ? process.env.MONGO_URI_TESTS
    : process.env.NODE_ENV === "localhost"
    ? process.env.STARBUCKS
    : process.env.MONGO_URI_HACKMERCED;

const db = () => {
  return mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

var models = { Attendees, Mailing };
module.exports = { db, models };
