const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray[i]; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected)
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const without = function(firstArray, secondArray) {
  let outputArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (!(secondArray.includes(firstArray[i]))) outputArray.push(firstArray[i]);
  }
  return outputArray;
};

//Test Cases
console.log(without([1, 2, 3], [1]));
console.log(without(['1','2','3'], [1,2,"3"]));

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);