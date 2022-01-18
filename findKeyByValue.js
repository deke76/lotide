const findKeyByValue = function(objectToSearch, stringValue) {
  for (const key in objectToSearch) {
    if (objectToSearch[key] === stringValue) return key;
  }
  return undefined;
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;