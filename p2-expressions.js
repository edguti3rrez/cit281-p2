/*
    CIT 281 Project 2
    Name: Edwin Gutierrez
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

// Will return a random length string between minLength and maxLength
const getRandomString = function(minLength, maxLength) {

    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
    return getSortedString(result);
}

// Will return a single random undercase letter from the alphabet array
const getRandomLetter = function() {
    return alphabet[getRandomInteger(0,alphabet.length-1)]
}

// will sort and return a string in ascending order
const getSortedString = function(string) { return string.split("").sort().join(""); }

console.log(getRandomString(10, 20));