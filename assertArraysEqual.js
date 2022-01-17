const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let message = `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  if (eqArrays(actual, expected)) message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  console.log(message);
};

module.exports = assertArraysEqual;