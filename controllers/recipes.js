const logger = require('../utils/logger');
const recipeStore = require('../models/recipes-store')
const recipes = {
    async index(request, response) {
        const data = recipeStore.getRecipeData();
        logger.info(data);
        const viewData = {
            title: 'Recipes',
            recipes: await recipeStore.getRecipeData(),
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