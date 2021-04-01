const { Router } = require('express');
const Recipe = require('../models/Recipe');
const textOnOrderService = require('../services/textOnOrderService');
const RecipeService = require('../services/RecipeService')


module.exports = Router()
    
   .post('/', async (req, res, next) => {
      textOnOrderService
         .create(req.body)
         .then(recipe => res.send(recipe))
         .catch(next)

      })

   .get('/', (req, res, next) => {
      const ingredient = req.query.i; 
         RecipeService
            .create(ingredient)
            .then(recipes => res.send(recipes))
            .catch(next);

   })

   .get('/:id', (req, res, next) => {
      Recipe
         .findById(req.params.id)
         
         .then(recipes => res.send(recipes))
         .catch(next)
   })


