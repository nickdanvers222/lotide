# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nicholasdanvers/lotide`

**Require it:**

`const _ = require('@nicholasdanvers/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head = give the head of the array (index 0)
* tail = give the tail of the array (index 1- -1)
* middle =  Will return the middle elements of an array
* eqArrays = essentially chai's deepEqual
* countLetters = Counts how many letters there are
* countOnly = Counts the amount of times a name appears in the object given the values of true(See inside for example)
* findKey = This will find the object key
* findKeyByValue = finds the key of the value provided
* flatten = reduces an array with nested arrays into a single array
* forSorting = This will sort an object array, returning it by name but also considering age.
* letterPositions = returns the index of the letter given.
* pythagorean = finds the pythagorean number
