const { Router } = require('express');
// const Recipe = require('../models/Recipe');
const RecipeService = require('../services/RecipeService');

module.exports = Router()
    
   .get('/', (req, res, next) => {
    const ingredient = req.query.i; 
    RecipeService
    .create(ingredient)
    .then(recipes => res.send(recipes))
    .catch(next);

   })