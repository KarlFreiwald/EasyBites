const userStore = require('../models/user-store.js');
const logger = require('../utils/logger.js');

const accounts = {
    logout(request, response) {
        request.session.destroy();
        response.redirect('/');
    },

    login(request, response) {
        if (request.session.user) {
            response.redirect('/');
        } else {
            response.render('login', {title: 'Login'});
        }
    },

    signup(request, response) {
        if (request.session.user) {
            response.redirect('/');
        } else {
            response.render('signup', {title: 'Signup'});
        }
    },

    async register(request, response) {
        const result = await userStore.addUser(request.body);
        response.redirect(result ? '/' : '/signup');
    },

    async authenticate(request, response) {
        const email = await userStore.authenticateUser(request.body.email, request.body.password);
        if (email)
            request.session.user = email;
        response.redirect(email ? '/' : '/');
    },
};

module.exports = accounts;