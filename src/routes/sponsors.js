const router = require('express').Router();

router.get('/sponsor/:id', async (req, res) => { });

router.get('/sponsors', async (req, res) => { res.send('sponsors') });

router.post('/sponsor/:id', async (req, res) => { });

router.post('/sponsors', async (req, res) => { });

module.exports = router;