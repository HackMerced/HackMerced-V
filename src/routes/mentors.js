const mentor = require('express').Router();

mentor.get('/mentor/:id', async (req, res) => { });

mentor.get('/mentors', async (req, res) => { res.send('mentors') });

mentor.post('/mentor/:id', async (req, res) => { });

mentor.post('/mentors', async (req, res) => { });

module.exports = mentor;