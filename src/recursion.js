/* jshint esversion: 6 */

//Minimun: Questions 1 - 10; 23; 24


// How to use this repo:
// Fork this repo and clone it to your local machine
// Open SpecRunner.html in your web browser
// Code your solutions in recursion.js
// Review the tests in spec/part1.js and spec/part2.js as necessary
// Save your work and refresh your browser to check for passing/failing tests

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // edge case, n should not be negative
  // base case
    // when n is 0, should return 1;
  // recursive case
    // use the current input * input -1 * (input-1-1) * .....

  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  return (n * factorial(n - 1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // edge case  >>> empty array >>> return 0;
  // create a result variable
  // create a remainingLength/last item's index variable to count the array length;

  // base case
    // array's length is 1 -------return that only element in the array

  //recursive case
    // first element + sum(array.slice(1)) + ........

  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  return array[0] + sum(array.slice(1))

};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // edge case -- empty array, return 0;

  // base case --- it not an array, return the value

  // recursive case -- forEach item
    // if the item is an array, call the function again,
    // if not, add it to the sum
  var total = 0;

  array.forEach(function(item) {
    if (!Array.isArray(item)) {
      total += item;
    } else {
      total += arraySum(item);
    }
  })

  return total;

};

// 4. Check if a number is even.
var isEven = function(n) {
  // take absolute value
  // base cases n = 0 >>> retrun true; n = 1 >>> return false;

  // recursive case -- function(n-2)
    // take absolute value
  // base cases n = 0 >>> retrun true; n = 1 >>> return false;

  // recursive case -- function(n-2)

  n = Math.abs(n);
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base case, n is 0, return 0;

  // recursive case -- 1.given is negative, sumBelow(n+1); 2. given is positive, sumBelow(b - 1)
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  } else {
    return n - 1 + sumBelow(n - 1);
  }

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // base case -- if y === x, or y - x === 1, return [];
  // recursive case -- keep push the x+1 into the result array

  var isIncreasing = true;
  if (x > y) {
    isIncreasing = false;
    var oldX = x;
    var oldY = y;
    x = oldY;
    y = oldX;
  }
  if (x === y || Math.abs(y - x) === 1) {
    return [];
  }

  var result = range(x, y - 1);
  result.push(y - 1)

  return isIncreasing ? result : result.reverse();

};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

  // base case -- exp is 0; return 1;
  // recursive case -- base * exponent(exp - 1)
  if (exp === 0) return 1;
  return exp > 0 ? base * exponent(base, exp - 1) : 1/exponent(base, -exp);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
// edge case n = 0
// base case -- n is 1, return true
// recursive case -- return powerOfTwo(n/2)
  if (n === 0) {
    return false;
  }
  if (n === 1) return true;
  return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // base case -- string length is 0, return empty string
  // recursive case -- take out the last char each time, slice the string, concat it
  var len = string.length;
  if (len === 0) return '';

  return string[len - 1].concat(reverse(string.slice(0, -1)));

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // ignore capital case
  // base case -- string length is 1, return true; string length is zero, return true;
  // recursive case -- compare the first and last char, if not the same, return false, if the same, slice the string and call the function again

  string = string.toLowerCase();

  var len = string.length;
  if (len === 0 || len === 1) return true;


  if (string[0] !== string[len - 1]) {
    return false;
  } else {
    return palindrome(string.slice(1, len - 1))
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};





// A few guidelines:
// Please refrain from sharing solutions. As crazy as it sounds, giving someone the answer doesn't help them. Instead, give them a question that encourages them to think differently.

// Q: Why does my function keep exceeding the call stack?

// A: What's your base case?

// Don't be afraid to pseudocode your algorithm before writing actual code.

// Pseudocode helps you focus on the algorithm instead of getting distracted by syntax.

// This repo requires each function call itself recursively and pays no attention to whether inner recursive functions are defined and called.

// While both are valid uses of recursion, there are important lessons to learn by following the method this repo enforces. Defining inner functions and calling them recursively relies on side effects, while following the more pure approach requires an understanding of how values are passed through the call stack.

// This repo restricts expanding the number of parameters a function accepts.

// Expanding the number of parameters is a valid approach, but has been restricted here to emphasize certain lessons while learning recursion.

// An attempt was made to order prompts by difficulty, but they don't have to be solved in any particular order.

// Feel free to make pull requests or open issues regarding bugs or suggestions.

// Watch, Star, and Fork this repo. You know you want to.

