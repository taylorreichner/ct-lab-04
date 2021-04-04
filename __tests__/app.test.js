const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Recipe = require('../lib/models/Recipe')

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn(),
  },
}));

describe('routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let recipe; 

  beforeEach( async () => {
    recipe = await Recipe.insert({  title: 'bacon',
    ingredients: 'bacon stuff',
    thumbnail: "fsdas" })
  })
 

  it('adds new recipe to our DB and send text updating user', () => {
    return request(app)
        .post('/api/v1/recipes')
        .send({ 
          title: 'bacon',
          ingredients: 'bacon stuff',
          
      
      })
        .then((res) => {
          
          expect(res.body).toEqual({
          id: '2',
          title: 'bacon',
          ingredients: 'bacon stuff',
          thumbnail: null,
          })
      })
    })
  it('finds orders based on id', () => {
    return request(app)
      .get('/api/v1/recipes/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          title: 'bacon',
          ingredients: 'bacon stuff',
          thumbnail: null,
        })
      })

  })  
  
  it('finds order by id and updates the title', () => {
      return request(app)
        .put('/api/v1/recipes/1')
        .send({title: 'super cool bacon'})
        .then((res) => {
          expect(res.body).toEqual({
            id: '1',
            title: 'super cool bacon',
            ingredients: 'bacon stuff',
            thumbnail: null
          })
        })
     })
  
  it('deletes item by id', () => {
    return request(app)
      .delete('/api/v1/recipes/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          title: 'bacon',
          ingredients: 'bacon stuff',
          thumbnail: null
        })
      })
  })   
  
});
