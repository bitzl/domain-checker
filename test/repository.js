'use strict';

const expect = require('chai').expect,
  repository = require('../lib/repository.js');

describe('Test repository.', function() {
  describe('Estimate optimal query size with determineQuerySize(min, max, total)', function () {
    context('If the calculated query size would be smaller than min', function() {
      it('should return min', function() {
        expect(repository.determineQuerySize(10, 100, 50)).to.equal(10);
      });
    });
    context('If the calculated query size would be larger than max', function() {
      it('should return max.', function() {
        expect(repository.determineQuerySize(10, 100, 5000)).to.equal(100);
      });
    });
    context('If the calculated query size would be between min and max', function() {
      it('should return a value corresponding to the ratio.', function() {
        expect(repository.determineQuerySize(10, 100, 500)).to.equal(50);
      });
    });
  });
});
