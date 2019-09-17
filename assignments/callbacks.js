// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

function logLength(items) {
  console.log(items)
}

getLength(items, logLength)

// 
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr)
}

function logLast() {
  console.log(items.slice(-1));
}

last(items, logLast)

// 
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y)
}

function logAdd(x, y) {
  console.log(x + y);
} // callback

sumNums(3,4, logAdd)

// 
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y)
}

function logMultiply(x, y) {
  console.log(x * y);
} // callback

multiplyNums(6, 6, logMultiply)

// 
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list)
}

function logContains(item, list) {
  console.log(list.includes(item))
}

contains("Pencil", items, logContains)

/* STRETCH PROBLEM */

let numArray = [1,4,7,4,5,8,9,3,1]
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array)
}

function logDups(array) {
  console.log(array.reduce((unique, items) => {
    return unique.includes(items) ? unique : [...unique, items]
  }, []))
}

removeDuplicates(numArray, logDups)
console.log(numArray)
