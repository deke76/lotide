const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(firstArray, secondArray) {
  let arraysEqual = firstArray.length === secondArray.length;
  if (arraysEqual) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) arraysEqual = false;
    }
  }
  return arraysEqual;
};

//Test code
assertEqual(eqArrays([1,2], [1,2,3]), false);
assertEqual(eqArrays([1,2], 2), false);
assertEqual(eqArrays("one", "one"), true);
assertEqual(eqArrays(2, 2), true);