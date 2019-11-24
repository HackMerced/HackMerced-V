const router = require('express').Router();

router.get('/volunteer/:id', async (req, res) => { });

router.get('/volunteers', async (req, res) => { res.send('volunteers') });

router.post('/volunteer/:id', async (req, res) => { });

router.post('/volunteers', async (req, res) => { });

module.exports = router;