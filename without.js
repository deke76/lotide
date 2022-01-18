const without = function(firstArray, secondArray) {
  let outputArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (!(secondArray.includes(firstArray[i]))) outputArray.push(firstArray[i]);
  }
  return outputArray;
};

// //Test Cases
// console.log(without([1, 2, 3], [1]));
// console.log(without(['1','2','3'], [1,2,"3"]));

// const words = ['hello', 'world', 'lighthouse'];
// without(words, ['lighthouse']);
// assertArraysEqual(words, ['hello', 'world', 'lighthouse']);

module.exports = without;