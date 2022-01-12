const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < Math.max(firstArray.length, secondArray.length); i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected)
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual([1], [2]);
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual(['hello', 'world'], ['hello','world']);