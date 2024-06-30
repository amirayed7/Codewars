// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My answer
function findShort(s) {
  let words = s.split(" ")
  let minLength = words[0].length

  for (let i = 1; i < words.length; i++) {
    let wordLength = words[i].length
    if (wordLength < minLength) {
      minLength = wordLength
    }
  }

  return minLength
}
