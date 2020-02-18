const router = require("express").Router();
const Attendees = require("../models").models.Attendees;
const { Keccak } = require('sha3');

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


router.patch("/attendees", async (req, res) => {
Attendees.findOne({ myEmail: req.body.myEmail }).then(user => {
    if (user) {
    Attendees.findOneAndUpdate({ myEmail: req.body.myEmail }, req.body, (error, docs) => {
        if (error) {
          console.log(error);
        }
      });
      res.status(200).json({user: "account updated!", secret: process.env.JWT_SECRET});
    } else {
      return res.status(404).json({ user: "Application doesn't exist" });
    }

  })

});


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

router.post("/attendees", async (req, res) => {
  Attendees.findOne({ email: req.body.email }).then(user => {
    if (user !== null) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      Attendees.insertMany(req.body, (error, docs) => {
        if (error) {
          return res.status(500).send(error);
        }
        return res.status(200).json({submitted: "Application successfully submitted!"})
      });
    }
  })
});

// Check if user is in DB by email
router.post("/attendees/q", async (req, res) => {
  Attendees.findOne({ email: req.body.myEmail }).then(user => {
    if (user) {
      return res.status(200).json({ user });
    } else {
      return res.status(200).json({ user: "application does not exist" });
    }
  });
});

// Hash password and check authentication?
router.post("/attendees/c", async (req, res) => {
  Attendees.findOne({email: req.body.myEmail}).then(user => {
    if (user) {
      var attemptPassword = req.body.attemptPassword;
      var userPassword = user.password;
      var didUserLogIn = false;
      const hash = new Keccak(256);
      for (var i = 65; i <= 122; i++) {
        hash.reset();
        const attempt = String.fromCharCode(i);
        hash.update(attemptPassword).update(attempt);
        const newPass = hash.digest('hex');
        if(newPass === userPassword){
          didUserLogIn = true;
          break;
        }
      }
      if(didUserLogIn){
        return res.status(200).json({result: "correct", secret: process.env.JWT_SECRET});
      }else{
        return res.status(200).json({result: "incorrect"});
      }
    }else{
      return res.status(200).json({ result: "application does not exist" });
    }
  });
});

module.exports = router;