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
          thumbnail: "fsdas"
      
      })
        .then((res) => {
          
          expect(res.body).toEqual({
          id: '2',
          title: 'bacon',
          ingredients: 'bacon stuff',
          thumbnail: "fsdas"
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
          thumbnail: "fsdas"
        })
      })

  })  
  
  
  
  
});
