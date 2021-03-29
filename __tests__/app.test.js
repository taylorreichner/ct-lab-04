const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('ct-lab-04 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});

describe('04 demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  let recipe; 

  beforeEach( async () => {
    recipe = await Recipe.insert({  })
  })

  it('finds orders by ingredients', () => {
    return request(app)
      .get('/api/v1/recipes/onion')
      .then((res) => {
        
        expect(res.body).toEqual({
         
        });
      });
    });
  
  
  
  
});
