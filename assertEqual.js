const assertEqual = function(actual, expected) {
  let message = `❌❌❌ Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) message =`✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  console.log(message);
};

module.exports = assertEqual;