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

// console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;