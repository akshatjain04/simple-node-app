// ********RoostGPT********
// Test generated by RoostGPT for test MiniProjects using AI Type Azure Open AI and AI Model roost-gpt4-32k



// ********RoostGPT********
const request = require('supertest');
const express = require('express');
const health = require('./health');

const app = express();
app.use('/health', health);

describe('Health Check', () => {
  
  beforeAll(() => {
    console.log('Tests are about to start...');
  });

  afterAll(() => {
    console.log('Tests have finished.');
  });

  test('returns status 200', async () => {
    const response = await request(app).get('/health');
    
    expect(response.statusCode).toBe(200);
  });

  test('returns status healthy', async () => {
    const response = await request(app).get('/health');
    
    expect(response.body.status).toBe('healthy');
  });

  test('returns a body value', async () => {
    const response = await request(app).get('/health');
    
    expect(response.body).toBeDefined();
    expect(typeof response.body).toBe('object');
  });

});
