const router = require("express").Router();
const { Keccak } = require("sha3");
const axios = require("axios");

const Attendees = require("../models").models.Attendees;

/**
 * @api {post} /api/attendees Add new Attendee(s)
 * @apiDescription Adds an array of new Attendee(s)
 * @apiVersion 1.0.0
 * @apiName Add new Attendee(s)
 * @apiGroup Attendee(s)
 * @apiPermission general
 *
 * @apiReqBody  {String}         ["first":"john"]                     First Name
 * @apiReqBody  {String}         ["last":"smith"]                     Last Name
 * @apiReqBody  {String}         ["email":"john.smith@email.com"]     Email
 * @apiReqBody  {String}         ["phone":"+1(999)999-9999"]          Phone Number
 * @apiReqBody  {Object}         ["school":{info:{...}}]              School
 * @apiReqBody  {Number}         ["age":18]                           Age
 * @apiReqBody  {String}         ["gender":"male"]                    Gender
 * @apiReqBody  {String}         ["shirt":"m"]                        Shirt
 * @apiReqBody  {Array}          ["languages":[...]]                  Languages
 * @apiReqBody  {String}         ["dietary":"bob"]                    Dietary
 * @apiReqBody  {String}         ["needs":"bob"]                      Needs
 * @apiReqBody  {Number}         ["hackathons":0]                     Hackathons
 * @apiReqBody  {Object}         ["team":{info:{...}}]                Team
 * @apiReqBody  {String}         ["linkedin":"linkedin.com/in/user"]  LinkedIn
 * @apiReqBody  {String}         ["github":"github.com/user"]         GitHub
 * @apiReqBody  {String}         ["sites":"website.com"]              Sites
 * @apiReqBody  {String}         ["resume":blob]                      Resume
 * @apiReqBody  {String}         ["required":"attendee"]              Privileges
 *
 * @apiSuccess {Object[]} attendee(s) List of successfully registered attendee(s).
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
router.post("/attendees", (req, res) => {
  Attendees.findOne({ email: req.body.email }).then(user => {
    if (user !== null) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      Attendees.insertMany(req.body, (error, docs) => {
        if (error) {
          return res.status(500).send(error);
        }

        return res
          .status(200)
          .json({ submitted: "Application successfully submitted!" });
      });
    }
  });
});

module.exports = router;
