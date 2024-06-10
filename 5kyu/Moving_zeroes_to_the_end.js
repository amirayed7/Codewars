// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//My answer
function moveZeros(arr) {
  let count = arr.filter(a => a === 0)
  
  return arr.filter(i => i !== 0).concat(count)
}
