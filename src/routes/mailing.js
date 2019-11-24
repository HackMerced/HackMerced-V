const router = require('express').Router();
const Mailing = require('../models').models.Mailing;
/*
mailing.get('/mailing/:id', async (req, res) => { });
mailing.get('/mailing', async (req, res) => { res.send('mailing') });
mailing.post('/mailing/:id', async (req, res) => { });
*/

router.get('/mailing', async (req, res) => { res.send('hello world') });
/**
 * @api {post} /api/mailing Add new Mailers(s)
 * @apiDescription Adds an array of new mailers(s)
 * @apiVersion 1.0.0
 * @apiName Add new Mailers(s)
 * @apiGroup Mailer(s)
 * @apiPermission general
 *
 * @apiReqBody  {String}         ["name":"John Smith"]                User's Name
 * @apiReqBody  {String}         ["email":"john.smith@email.com"]     Email
 *
 * @apiSuccess {Object[]} attendee(s) List of successfully registered Mailers(s).
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */

router.post("/mailing", async (req, res) => {
  Mailing.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      Mailing.insertMany(req.body, (error, docs) => {
        if (error) {
          res.send(error);
        }

        if (docs) {
          res.send(docs);
        }
      });
    }
  });
});

module.exports = router;
