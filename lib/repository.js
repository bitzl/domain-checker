'use strict';

const ratio = 0.1;

function determineQuerySize(min, max, total) {
  let optimalQuerySize = Math.round(total * ratio);
  if (optimalQuerySize  < min) {
    optimalQuerySize = min;
  } else if (optimalQuerySize > max) {
    optimalQuerySize = max;
  }
  return optimalQuerySize;
}

module.exports.determineQuerySize = determineQuerySize;
