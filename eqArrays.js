const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray[i]; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

//Test code
assertEqual(eqArrays([1,2,3], [1,2,3]), true);