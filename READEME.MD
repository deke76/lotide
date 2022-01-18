# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters( strToCount )`: Returns the number of letters in a string
* `countOnly( arrToCount, obj)`: Returns the number of times an item from an array is shown according to a qualification object
* `findKey( objToSearch)`: Returns the value of a the Object to Search key
* `findKeyByValue( objToSearch, strToSearchFor)`: Returns the key associated with the search string
* `flatten( arrToFlatten)`: Flattens the input array by one level
* `head( array )`: Returns the first item of an array 
* `map( array, callback )`: Returns an array with each of it's items ran through the callback function
* `middle( array )`: Returns the middle of an array as an array of [1] if the array is odd or [2] if it's even
* `tail( arra )`: Returns the end of an array excluding the first index
* `takeUntil( array, callback )`: Returns array where items are equal to the conditions of the callback function
* `without( array1, array2)`: Returns an array where the items are included from array and excluded by array2