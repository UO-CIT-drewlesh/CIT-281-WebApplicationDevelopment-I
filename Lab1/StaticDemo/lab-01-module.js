// Lab 01 module functions

// Reverse a string
function reverseString(str) {
    return [...str].reverse().join('');
}

// Concatenate a string with itself
const concatenateString = function(str) {
    return str + str;
}

// Expose globally for browser
window.reverseString = reverseString;
window.concatenateString = concatenateString;
