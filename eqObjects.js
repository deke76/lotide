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

const eqObjects = function(firstObject, secondObject) {
  let bigObject;
  let smallObject;
  if (Object.keys(firstObject).length > Object.keys(secondObject).length) {
    bigObject = firstObject;
    smallObject = secondObject;
  } else {
    bigObject = secondObject;
    smallObject = firstObject;
  }

  const bigObjectArray = Object.keys(bigObject).sort();
  const smallObjectArray = Object.keys(smallObject).sort();

  let equalObjects = eqArrays(bigObjectArray, smallObjectArray);
  let keyIndex = 0;

  while (equalObjects && (keyIndex < bigObjectArray.length)) {
    equalObjects = eqArrays(bigObject[bigObjectArray[keyIndex]], smallObject[smallObjectArray[keyIndex]]);
    keyIndex++;
  }
  return equalObjects;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", ag: "1" };
assertEqual(eqObjects(ab, ba), false);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);