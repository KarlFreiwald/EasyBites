const dataStore = require('./data-store');
const logger = require('../utils/logger');

const recipeStore = {
    async getRecipeData() {
        const recipes = await dataStore.query(
            'select * from eb_recipe;',
            [],
            'error fetching recipes'
        );
        return recipes.rows;
    },

    async getSingleRecipe(id) {
        const recipe = await dataStore.query(
            'select * from eb_recipe where recipe_id = $1',
            [id],
            'error fetching recipe with id ' + id
        )

        return recipe.rows[0];
    },

    async getIngredientsForRecipe(id) {
        const ingredients = await dataStore.query(
            'SELECT i.name, ri.amount, ri.continuous\n' +
            'FROM eb_ingredient i\n' +
            'JOIN eb_recipe_ingredient ri ON i.ingredient_id = ri.ingredient_id\n' +
            'WHERE ri.recipe_id = $1;',
            [id],
            'error fetching ingredients for recipe with id ' + id
        )

        return ingredients.rows;
    }
}

module.exports = recipeStore;