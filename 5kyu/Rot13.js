// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


//My Answer
function rot13(message) {
    return message.split('').map(letter => 
        (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) || 
        (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) ? 
        String.fromCharCode((letter.charCodeAt(0) - (letter >= 'a' ? 97 : 65) + 13) % 26 + (letter >= 'a' ? 97 : 65)) : 
        letter
    ).join('');
}
