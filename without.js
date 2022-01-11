const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray[i]; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

const without = function(firstArray, secondArray) {
  let outputArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    (secondArray.includes(firstArray[i])) ? i++ : outputArray[i] = firstArray[i];
  }
};