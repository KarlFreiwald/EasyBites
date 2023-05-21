const express = require('express');
const router = express.Router();

const home = require('./controllers/home.js');
const about = require('./controllers/about.js');
const recipe = require('./controllers/recipe.js');

router.get('/', home.index);
router.get('/about', about.index);
router.get('/recipe/:recipe_id', recipe.index);

module.exports = router;
