// const { default: test } = require('node:test');
const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);

// const {validator} = require('../src/middleware/validator');


describe('Validator Middleware', () => {

  test('200 if the name is in the query string', async () => {
    const response = await request.get('/person');
    expect(response.name).stringContaining('string');
    // expect(response.name).toBeTruthy();
    // expect(response.status).toEqual(200);
  });

  test('500 if no name in query string', async () => {
    const response = await request.get('/person');
    expect(response.name).not.stringContaining('string');
  });

});
