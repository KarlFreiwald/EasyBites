const logger = require('../utils/logger');

const recipes = {
    index(request, response) {
        const viewData = {
            title: 'Recipes',
            user: request.session.user
        };

        response.render('recipes.hbs', viewData);
    },
    view(request, response) {
        const viewData = {
            title: 'Recipe', // TODO: change to recipes name
            recipe_id: request.params.recipe_id
        };

        response.render('recipe-view.hbs', viewData);
    }
}

module.exports = recipes;