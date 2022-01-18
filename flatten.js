const flatten = function(...args) {
  const outputArray = [];
  let i = 0;
  for (let arg of args) {
    if (Array.isArray(arg)) {
      arg.forEach((element, j) => outputArray[j] = element);
    } else outputArray[i++] = arg;
  }
  return outputArray;
};

// //Test
// assertArraysEqual(flatten([1,2,[3,4],5,[6]]), [1,2,3,4,5,6]);

module.exports = flatten;