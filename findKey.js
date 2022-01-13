const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(objectToSearch, callback) {
  for (const key in objectToSearch) {
    if (callback(objectToSearch[key])) return key;
  }
  return undefined;
};

//Test code
const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
console.log(testObject);
console.log(Object.keys(testObject));
assertEqual(findKey(testObject, x => x.stars === 2), "noma"); // => "noma"