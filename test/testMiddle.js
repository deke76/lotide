const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle(["test", "hello", "world"]),["hello"]);
assertArraysEqual(middle(["lighthouse", "labs"]),[]);
assertArraysEqual(middle(["lighthouse", "labs", "test", "hello", "world",56]),["test","hello"]);