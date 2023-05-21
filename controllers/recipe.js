const logger = require('../utils/logger');

const recipe = {
    index(request, response) {
        const viewData = {
            title: 'Recipe',
            recipe_id: request.params.recipe_id
        };

        response.render('recipe.hbs', viewData);
    }
}

module.exports = recipe;