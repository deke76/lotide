const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [2] for [1, 2 , 3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it('returns [] for []', () => {
    assert.deepEqual(middle([]), []);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns [] for [1,2]', () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it('returns [2] for [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it('returns [2, 3] for [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it('returns ["hello"] for ["test", "hello", "world"]', () => {
    assert.deepEqual(middle(["test", "hello", "world"]), ["hello"]);
  });

  it('returns [] for ["lighthouse", "labs"]', () => {
    assert.deepEqual(middle(["lighthouse", "labs"]), []);
  });

  it('returns ["test", "hello"] for ["lighthouse", "labs", "test", "hello", "world",56]', () => {
    assert.deepEqual(middle(["lighthouse", "labs", "test", "hello", "world",56]), ["test","hello"]);
  });

});