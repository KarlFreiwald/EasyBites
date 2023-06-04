const userStore = require('../models/user-store');
const logger = require('../utils/logger');
const helpers = require('../utils/helpers');

const accounts = {
    logout(request, response) {
        request.session.destroy();
        response.redirect('/');
    },

    login(request, response) {
        if (request.session.user) {
            response.redirect('/');
        } else {
            const viewData = helpers.get_gets(request, {title: 'Login'});
            response.render('login', viewData);
        }
    },

    signup(request, response) {
        if (request.session.user) {
            response.redirect('/');
        } else {
            response.render('signup', helpers.get_gets(request, {title: 'Signup'}));
        }
    },

    async register(request, response) {
        const result = await userStore.addUser(request.body);
        if (result)
            response.redirect(result ? '/' : '/signup');
        else
            response.redirect('/signup?info_msg=Email already taken&info_classes=bg-danger text-white');
    },

    async authenticate(request, response) {
        const email = await userStore.authenticateUser(request.body.email, request.body.password);
        if (email) {
            request.session.user = email;
            response.redirect('/recipes');
        }
        else
            response.redirect('/login?info_msg=Authentication error&info_classes=bg-danger text-white');
    },
};

module.exports = accounts;