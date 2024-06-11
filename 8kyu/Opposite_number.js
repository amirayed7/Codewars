// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34


//My answer
function opposite(number) {
  if (number < 0) {
    return Math.abs(number);
  } else if (number > 0) {
    return number * (-1);
  } else {
    return 0;
  }
}
