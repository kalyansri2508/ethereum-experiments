const expect = require('chai').expect;
const request = require('supertest');
const express = require('express');
const app = require('../index.js');

describe('get /', (done)=> {
  it('Load the homepage', function(done) {
    request(app)
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /text\/html/)
      .expect(200, done);
  });
  return done;
});
