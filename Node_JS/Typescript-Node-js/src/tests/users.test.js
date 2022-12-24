const supertest = require('supertest');
const app = require('../../dist/server');
const api = supertest(app);

describe('Routes of users!', () => {
  test('Expect that the user be generated', async () => {
    const response = await api.get('/').set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
  });
});
