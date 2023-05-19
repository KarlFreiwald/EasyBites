const logger = require('../utils/logger.js');

const home = {
    index(request, response) {
        const viewData = {
            title: 'EasyBites'
        };

        response.render('index.hbs', viewData);
    },
};

module.exports = home;
