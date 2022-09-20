'use strict';

const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);

describe('API Server', () => {
  test('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  test('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('this is a bad route');
  });
  it('handles root path', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Welcome to Tray home, Day 2');
  });
});
