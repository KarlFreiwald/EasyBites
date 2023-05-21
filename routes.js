const express = require('express');
const router = express.Router();

const home = require('./controllers/home.js');
const about = require('./controllers/about.js');
const recipes = require('./controllers/recipes.js');

router.get('/', home.index);
router.get('/about', about.index);
router.get('/recipes', recipes.index);
router.get('/recipes/:recipe_id', recipes.view);

module.exports = router;
