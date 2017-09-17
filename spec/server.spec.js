var request = require('supertest');
var app;

describe('Server', function() {
  beforeAll(function(done) {
    app = require('../server.js');
    done();
  });

  it('should be running', function(done) {
    var http = require('http');
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        done();
      });
  });
});