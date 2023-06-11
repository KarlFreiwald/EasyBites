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
    }
}

module.exports = recipeStore;