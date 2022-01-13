const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(stringToCount) {
  let countedString = {};
  for (const char of stringToCount) {
    if (char !== ' ') {
      if (!countedString.hasOwnProperty(char)) countedString[char] = 0;
      countedString[char]++;
    }
  }
  return countedString;
};

console.log(countLetters("lighthouse in the house"));