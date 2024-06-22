// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.


//My answer
var lengthOfSequence = function (arr, n) {

  let firstIndex = arr.indexOf(n);
  let lastIndex = arr.lastIndexOf(n);

  
  if (firstIndex === -1 || firstIndex === lastIndex) {
    return 0;
  }
  
  let count = arr.filter(a => a === n).length;

  if (count > 2) {
    return 0;
  }
  
  return lastIndex - firstIndex + 1;
};
