'use strict';

const expect = require('chai').expect,
    domains = require('../lib/domains'),
    util = require('util');

describe('Domain library', function () {
  describe('createDomain', function () {
    context('when base and tld are given', function () {
      it('should return a valid domain', function () {
        expect(domains.createDomain('example', 'com')).to.equal('example.com');
      });
    });
  });
  describe('checkDomain', function () {
    context('when a registred domain is given', function () {
      it('should return a valid domain', function (done) {
        domains.checkDomain('example.com', function (registered) {
          expect(registered).to.equal(true);
          done();
        });
      });
    });
    context('when a registred domain is given', function () {
      it('should return a valid domain', function (done) {
        domains.checkDomain('awliefjdkh.com', function (registered) {
          expect(registered).to.equal(false);
          done();
        });
      });
    });
  });
  describe('checkAll', function () {
    context('when a registered domain without any metadata is given', function () {
      it('should return a valid domain', function (done) {
        const words = [
          { word: 'example' },
          { word: 'adkjasdhkasdh' },
        ];
        domains.checkAll(words, 'com', 5, function (error, result) {
          const expected = [
            { word: 'example', tld: { com: true } },
            { word: 'adkjasdhkasdh', tld: { com: false } },
          ];
          expect(result).to.deep.equal(expected);
          done();
        });
      });
    });
  });
});
