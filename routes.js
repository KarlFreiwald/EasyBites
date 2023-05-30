const express = require('express');
const router = express.Router();

const home = require('./controllers/home.js');
const about = require('./controllers/about.js');
const recipes = require('./controllers/recipes.js');
const register = require('./controllers/register.js');

router.get('/', home.index);
router.get('/about', about.index);
router.get('/recipes', recipes.index);
router.get('/recipes/:recipe_id', recipes.view);
router.get('/register', register.index);

/* Register API */
var registerApi = require("./models/register.js");
router.get('/api/register', async function(req, res, next) {
    let username = req.query.user;
    let email = req.query.email;
    let pwd = req.query.password;
    console.log(`adding user info: ${username}, ${email}, ${pwd}`);
    let user = await registerApi.addUser(username, email, pwd);
    res.status(200).json({'id': user.id});
  });

module.exports = router;
