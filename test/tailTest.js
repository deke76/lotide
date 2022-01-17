const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words);
assertEqual(words.length,3);
assertEqual(result.length, 2);

for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], words[i + 1]);
}

let testOne = ["one"];
console.log(tail(testOne));

let testEmpty = [];
console.log(tail(testEmpty));