const { Router } = require('express');
const Recipe = require('../models/Recipe');
const textOnOrderService = require('../services/textOnOrderService');
const RecipeService = require('../services/RecipeService');
const textOnUpdatService = require('../services/textOnUpdate');
const { ConnectionPolicyPage } = require('twilio/lib/rest/voice/v1/connectionPolicy');
const textOnDeleteService = require('../services/textOnDeleteService');


module.exports = Router()
    
   .post('/', async (req, res, next) => {
   console.log('!!!!HJLKJHHJKL', req.body)
      textOnOrderService
         .create(req.body)
         .then(recipe => res.send(recipe))
         .catch(next)

      })

   .get('/', async (req, res, next) => {
      const ingredient = req.query.i; 
         RecipeService
            .create(ingredient)
            .then(recipes => res.send(recipes))
            .catch(next);

   })

   .get('/:id', async (req, res, next) => {
      Recipe
         .findById(req.params.id)
         .then(recipes => res.send(recipes))
         .catch(next)
   })

   .put('/:id', async (req, res, next) => {
      textOnUpdatService
         .update(req.body, req.params)
         .then(recipes => res.send(recipes))
         .catch(next)
   })

   .delete('/:id', async (req, res, next) => {
      textOnDeleteService
         .deleteItem(req.params)
         .then(recipes => res.send(recipes))
         .catch(next)
   })


