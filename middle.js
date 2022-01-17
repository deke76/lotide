const middle = function(array) {
  let middleIndex = array.length / 2;
  let middleArray = [];
  if (middleIndex > 1) {
    middleIndex = Math.floor(middleIndex);
    middleArray = (array.length % 2 === 0) ? array.slice(middleIndex - 1, middleIndex + 1) : array.slice(middleIndex, middleIndex + 1);
  }
  return middleArray;
};

module.exports = middle;