const logger = require('../utils/logger.js');

const about = {
    index(request, response) {
        const viewData = {
            title: 'About'
        };

        response.render('about.hbs', viewData);
    },
};

module.exports = about;
