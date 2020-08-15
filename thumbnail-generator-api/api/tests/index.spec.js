
const request = require('supertest');
const { expect } = require('chai');
const app = require('../api');

describe('index', () => {
    it('should return a valid response', function () {
        return request(app)
            .get('/api/v1')
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('version');
                expect(res.body.version).to.be.a.string;
                expect(res.body.version).to.equal('1.0.0');
            })
            .catch((err) => expect(err).to.be.undefined);
    });
});
