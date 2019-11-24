const mongoose = require("mongoose");
const Attendee = require("./attendee");
const Team = require("./team");
const Mailing = require("./mailing");

if (process.env.NODE_ENV === "development") {
  DB_URI = process.env.MONGO_URI_TESTS;
} else {
  DB_URI = process.env.MONGO_URI_HACKMERCED;
}

const db = () => {
  return mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

var models = { Attendee, Mailing };
module.exports = { db, models };
