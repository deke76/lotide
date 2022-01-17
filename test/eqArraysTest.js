const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test code
assertEqual(eqArrays([1,2], [1,2,3]), false);
assertEqual(eqArrays([1,2], 2), false);
assertEqual(eqArrays("one", "one"), true);
assertEqual(eqArrays(2, 2), true);