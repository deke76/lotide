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
  const firstObjectArray = Object.keys(firstObject).sort();
  const secondObjectArray = Object.keys(secondObject).sort();

  let equalObjects = eqArrays(firstObjectArray, secondObjectArray);
  let keyIndex = 0;

  while (equalObjects && (keyIndex < firstObject.length)) {
    equalObjects = eqArrays(firstObject[firstObjectArray[keyIndex]], secondObject[secondObjectArray[keyIndex]]);
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