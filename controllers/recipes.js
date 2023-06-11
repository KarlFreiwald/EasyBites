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
    async view(request, response) {
        const viewData = {
            title: 'Recipe', // TODO: change to recipes name
            recipe: await recipeStore.getSingleRecipe(request.params.recipe_id),
            ingredients: await recipeStore.getIngredientsForRecipe(request.params.recipe_id)
        };

        logger.info(viewData);

        response.render('recipe-view.hbs', viewData);
    }
}

module.exports = recipes;