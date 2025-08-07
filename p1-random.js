/*

CIT 281 Project 1
Name: Drew Lesh

*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let randomWord = "";
let randomWord2 = "";

for (let i=0; i<=getRandomInteger(5,25); i++) {
    randomWord += alphabet[getRandomInteger(0, 25)];
}

console.log(randomWord);