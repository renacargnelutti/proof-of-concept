
const request = require('supertest');
const { expect } = require('chai');
const app = require('../api');

describe('index', () => {
    it('should return API version', () => {
        return request(app)
            .get('/api/v1')
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('success');
                expect(res.body.success).to.equal(true);
                expect(res.body).to.have.property('version');
                expect(res.body.version).to.be.a.string;
                expect(res.body.version).to.equal('1.0.0');
            })
            .catch((err) => expect(err).to.be.undefined);
    });

    it('should return an array of filenames', () => {
        return request(app)
            .post('/api/v1/photos')
            .attach('file', `${__dirname}/example.jpg`)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('success');
                expect(res.body.success).to.equal(true);
                expect(res.body).to.have.property('filenames');
                expect(res.body.filenames).to.be.an('array')
                expect(res.body.filenames).to.have.length(3);
            })
            .catch((err) => expect(err).to.be.undefined);
    });
});
