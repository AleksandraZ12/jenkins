const request = require('supertest');
const app = require('../app');

describe('Express.js App', () => {
it('lalala on GET /', async () => {
const response = await request(app).get('/');
expect(response.statusCode).toBe(200);
expect(response.text).toBe('Hello World');

});
});

