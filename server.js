const express = require("express");
var cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const chalk = require("chalk"); // require chalk module to give colors to console text
require("dotenv").config();

const routes = require("./src/routes");
const models = require("./src/models");
const db = require("./src/models").db;

const app = express();
const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;


if (process.env.NODE_ENV === "development") {
  const DB_URI = process.env.MONGO_URI_TESTS;
  app.use(cors());
} else {
  const DB_URI = process.env.MONGO_URI_HACKMERCED;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

// All Api routes
app.use(
  "/api",
  routes.attendees,
  routes.mailing,
  routes.mentors,
  routes.sponsors,
  routes.volunteers
);

// Render React Application
app.use(express.static(path.join(__dirname, "/client/build/")));

// Connect to MongoDB then open port on defined port in .env
mongoose.connection.on("connected", function() {
  console.log(connected("Mongoose default connection is open to", /(?=hack)(.*?)(?=\s*\?)/.exec(DB_URI)[0]));
});

db().then(async () => {
  mongoose.connection.on("error", function(err) {
    console.log(
      error("Mongoose default connection has occured " + err + " error")
    );
  });

  mongoose.connection.on("disconnected", function() {
    console.log(disconnected("Mongoose default connection is disconnected"));
  });

  process.on("SIGINT", function() {
    mongoose.connection.close(function() {
      console.log(
        termination(
          "Mongoose default connection is disconnected due to application termination"
        )
      );
      process.exit(0);
    });
  });

  app.listen(process.env.PORT, () =>
    console.log(chalk.bold.white(`Example app listening on port ${process.env.PORT}!`))
  );
});
