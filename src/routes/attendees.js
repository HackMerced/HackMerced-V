const router = require("express").Router();
const { Keccak } = require("sha3");
const axios = require("axios");

const Attendees = require("../models").models.Attendees;

/**
 * @api {get} /api/attendees Get Attendee
 * @apiDescription Checks if Attendee is in database
 * @apiVersion 1.0.0
 * @apiName Verify Attendee(s)
 * @apiGroup Attendee(s)
 * @apiPermission public
 *
 * @apiHeader {String} Authorization Attendee's access token
 *
 * @apiParam  {String}             [email]      User's email
 *
 * @apiSuccess {Object[]} Returns user information if in database.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
router.get("/attendees", async (request, response) => {
  await Attendees.findOne({ email: request.query.email }).then(user => {
    return user
      ? response.status(200).json({ user })
      : response.status(200).json({ user: "application does not exist" });
  });
});

/**
 * @api {patch} /api/attendee Update Attendee(s)
 * @apiDescription Updates an array of Attendee(s)
 * @apiVersion 1.0.0
 * @apiName Update Attendee(s)
 * @apiGroup Attendee(s)
 * @apiPermission general
 *
 * @apiHeader {String} Authorization  Attendee's access token
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-100}}      [perPage=1]  Users per page
 * @apiParam  {String}             [name]       User's name
 * @apiParam  {String}             [email]      User's email
 * @apiParam  {String=user,admin}  [role]       User's role
 *
 * @apiSuccess {Object[]} attendee(s) List of successfully registered attendee(s).
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
router.patch("/attendees", async (request, response) => {
  await Attendees.findOne({ email: request.body.email }).then(async user => {
    if (user) {
      await Attendees.findOneAndUpdate(
        { email: request.body.email },
        request.body,
        (error, docs) => {
          if (error) {
            console.error(error);
          }

          if (docs) {
            console.log(docs);
          }
        }
      );

      await response
        .status(200)
        .json({ user: "account updated!", secret: process.env.JWT_SECRET });
    } else {
      return response.status(404).json({ user: "Application doesn't exist" });
    }
  });
});

/**
 * @api {post} /api/attendees Add new Attendee(s)
 * @apiDescription Adds an array of new Attendee(s)
 * @apiVersion 1.0.0
 * @apiName Add new Attendee(s)
 * @apiGroup Attendee(s)
 * @apiPermission general
 *
 * @apiReqBody  {String}         ["firstName":"James"]                  First Name
 * @apiReqBody  {String}         ["lastName":"Bond"]                    Last Name
 * @apiReqBody  {String}         ["email":"john.smith@email.com"]       Email
 * @apiReqBody  {String}         ["phone":"+1(999) 999-9999"]           Phone Number
 * @apiReqBody  {Object}         ["school":{                            School Information
 * @apiReqBody  {String}         ["schoolName":"+1(999)999-9999"]       School Name
 * @apiReqBody  {String}         ["major":"Computer Science"]           Major
 * @apiReqBody  {String}         ["year":"Senior"]                      Year in School
 * @apiReqBody  {String}         ["schoolStanding":"undergraduate"]     School Standing
 * @apiReqBody  {Number}         ["graduationYear":2020]                Graduation Year
 * }]
 * @apiReqBody  {Number}         ["age":18]                             Age
 * @apiReqBody  {String}         ["gender":"male"]                      Gender
 * @apiReqBody  {String}         ["shirtSize":"m"]                      Shirt Size
 * @apiReqBody  {String}         ["dietaryRestrictions":"Vegan"]        Dietary Restrictions
 * @apiReqBody  {String}         ["specialNeeds":"N/A"]                 Special Needs
 * @apiReqBody  {Boolean}        ["firstHackathons":true]               First Hackathon
 * @apiReqBody  {String}         ["linkedin":"linkedin.com/in/user"]    LinkedIn
 * @apiReqBody  {String}         ["github":"github.com/user"]           GitHub
 * @apiReqBody  {String}         ["devpost":"devpost.com/user"]         Devpost
 * @apiReqBody  {String}         ["resume":"url/to/file"]               Resume
 * @apiReqBody  {Boolean}        ["codeOfConduct":true]                 Code of Conduct
 * @apiReqBody  {Boolean}        ["affiliationWithMLH":true]            Affiliation With MLH
 *
 * @apiSuccess {Object[]} attendee(s) List of successfully registered attendee(s).
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
router.post("/attendees", async (request, response) => {
  await Attendees.findOne({ email: request.body.email }).then(async user => {
    if (user !== null) {
      return response.status(400).json({ email: "Email already exists" });
    } else {
      await Attendees.insertMany(request.body, (error, docs) => {
        if (error) {
            return response.status(500).send(error);
        } else {
        return res
          .status(200)
          .json({ submitted: "Application successfully submitted!", secret: process.env.JWT_SECRET });
        }
      });
    }
  });
});

/**
 * @api {get} /api/attendees Authenticate Attendee
 * @apiDescription Hash password and check authentication
 * @apiVersion 1.0.0
 * @apiName Authenticate Attendee(s)
 * @apiGroup Attendee(s)
 * @apiPermission public
 *
 * @apiHeader {String} Authorization Attendee's access token
 *
 * @apiParam  {String}      [email]         Attendee's email
 * @apiParam  {String}      [password]      Attendee's password
 *
 * @apiSuccess {Object[]} Returns user information if in database.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
router.get("/attendees/authenticate", async (request, response) => {
  await Attendees.findOne({ email: request.query.email }).then(async user => {
    if (user) {
      const loginPassword = request.query.password;
      const userPassword = user.hashedPassword;
      //console.log(userPassword);
      //console.log(loginPassword);
      const hash = new Keccak(256);
      for (var i = 65; i <= 122; ++i) {
        
        await hash.reset();
        const attempt = String.fromCharCode(i);
        
        await hash.update(loginPassword).update(attempt);
        const newPassword = hash.digest("hex");
        if(newPassword === userPassword){
          return response.status(200).json({ result: "correct", secret: process.env.JWT_SECRET });
        }
        //console.log(newPassword);
        //return (newPassword === userPassword ? response.status(200).json({ result: "correct", secret: process.env.JWT_SECRET }) : response.status(200).json({ result: "incorrect" }));
      } 
      return response.status(200).json({ result: "incorrect" });
    } else {
      return response.status(200).json({ result: "application does not exist" });
    }
  });
});

module.exports = router;
