const logger = require('../utils/logger.js');

const contact = {
    index(request, response) {
        const viewData = {
            title: 'Contact',
            user: request.session.user
        };

        response.render('contact.hbs', viewData);
    },
};

module.exports = contact;
