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

const middle = function(array) {
  let middleIndex = array.length / 2;
  let middleArray = [];
  if (middleIndex > 1) {
    middleIndex = Math.floor(middleIndex);
    middleArray = (array.length % 2 === 0) ? array.slice(middleIndex - 1, middleIndex + 1) : array.slice(middleIndex, middleIndex + 1);
  }
  return middleArray;
};

assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle(["test", "hello", "world"]),["hello"]);
assertArraysEqual(middle(["lighthouse", "labs"]),[]);
assertArraysEqual(middle(["lighthouse", "labs", "test", "hello", "world",56]),["test","hello"]);