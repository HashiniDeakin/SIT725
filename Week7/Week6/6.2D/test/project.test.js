const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../server.js');

describe('Project API', () => {
  // Test 1: Check if the server responds with 200 status for /api/projects
  it('should return 200 status and projects data', (done) => {
    request(app)
      .get('/api/projects')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('statusCode', 200);
        expect(res.body).to.have.property('data').that.is.an('array');
        done();
      });
  });

  // Test 2: Check if the returned data contains at least one project
  it('should return at least one project', (done) => {
    request(app)
      .get('/api/projects')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data).to.have.lengthOf.at.least(1);
        done();
      });
  });

  // Test 3: Check if a project has required fields (title, image, link, description)
  it('should return projects with required fields', (done) => {
    request(app)
      .get('/api/projects')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        res.body.data.forEach(project => {
          expect(project).to.have.property('title');
          expect(project).to.have.property('image');
          expect(project).to.have.property('link');
          expect(project).to.have.property('description');
        });
        done();
      });
  });

  // Test 4: Check if server handles invalid route with 404
  it('should return 404 for invalid route', (done) => {
    request(app)
      .get('/api/invalid')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
