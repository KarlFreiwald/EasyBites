const logger = require('../utils/logger.js');

const register = {
    index(request, response) {
        const viewData = {
            title: 'Register'
        };

        response.render('register.hbs', viewData);
    },
};

module.exports = register;
