const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');

// import environment variables
const dotenv = require('dotenv').config();
//dotenv.config();

// define app server
const app = express();

// define using session cookies
app.use(session({
    secret: '592741239',  // some random string
    resave: false,
    saveUninitialized: false,
}));
const port = 3000;

// enable for forms reading
app.use(bodyParser.urlencoded({extended: true}));
// use folder public as static folder for assets
app.use(express.static('public'));

// define handlebars as the view engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// define where the routes are
const routes = require('./routes');
app.use('/', routes);

// listen on port 3000
app.listen(3000, () => {
    console.log(`EasyBites listening on ${port}...`);
    //console.log(`EasyBites listening on ${process.env.PORT}`);
});

module.exports = app;