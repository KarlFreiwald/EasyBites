CREATE TABLE eb_user (
    user_id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE eb_recipe (
    recipe_id SERIAL PRIMARY KEY,
    title TEXT,
    instructions TEXT
);

CREATE TABLE eb_ingredient (
    ingredient_id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE eb_recipe_ingredient (
    recipe_id INTEGER REFERENCES Recipe(recipe_id),
    ingredient_id INTEGER REFERENCES Ingredient(ingredient_id),
    amount NUMERIC,
    continuous BOOLEAN,
    PRIMARY KEY (recipe_id, ingredient_id)
);