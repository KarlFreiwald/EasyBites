const logger = require('../utils/logger.js');

const home = {
    index(request, response) {
        const viewData = {
            title: 'EasyBites'
        };
        if (request.session.user)
            response.redirect('/recipes');
        else
            response.render('index', viewData);
    },
};

module.exports = home;
