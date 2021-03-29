const pool = require('../utils/pool');

module.exports = class Recipe {
    id
    title;
    ingredients;
    thumbnail;

    constructor(row) {
       this.id = row.id;
       this.title = row.title;
       this.ingredients = row.ingredients;
       this.thumbnail = row.thumbnail;
    }

    static async insert(recipe) {
        const {
            rows
        } = await pool.query(`
        INSERT INTO recipe (title, ingredients, thumbnail)
        VALUEs ($1, $2, $3)
        `,
        [
            recipe.title,
            recipe.ingredients,
            recipe.thumbail,

        ]);
        return new Recipe(rows[0])
    };


}