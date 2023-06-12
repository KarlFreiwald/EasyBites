const express = require('express');
const router = express.Router();

const home = require('./controllers/home.js');
const about = require('./controllers/about.js');
const contact = require('./controllers/contact.js');
const recipes = require('./controllers/recipes.js');
const accounts = require('./controllers/accounts.js');

router.get('/', home.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/about', about.index);
router.get('/contact', contact.index);
router.post("/register", accounts.register);
router.post("/authenticate", accounts.authenticate);

// Protected (TODO)
router.get('/recipes', recipes.index);
router.get('/recipes/:recipe_id', recipes.view);

module.exports = router;
