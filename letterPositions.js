const letterPositions = function(stringToCount) {
  let countedString = {};
  for (const index in stringToCount) {
    if (stringToCount[index] !== ' ') {
      if (!countedString.hasOwnProperty(stringToCount[index])) {
        countedString[stringToCount[index]] = [];
      }
      countedString[stringToCount[index]].push(index);
    }
  }
  return countedString;
};

// console.log(letterPositions("hello"));

module.exports = letterPositions;