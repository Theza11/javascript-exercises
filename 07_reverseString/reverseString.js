const reverseString = function(phrase) {
    /*let letters = [];
    let reversedLetters = [];
    letters = phrase.split("");
    for (i=letters.length; i>-1; i--) {
        reversedLetters[letters.length-i] = letters[i];
    };
    return reversedLetters.join("");*/
    return phrase.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
