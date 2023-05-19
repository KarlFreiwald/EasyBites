const express = require('express');
const router = express.Router();

const home = require('./controllers/home.js');
const about = require('./controllers/about.js');

router.get('/', home.index);
router.get('/about', about.index);

module.exports = router;
