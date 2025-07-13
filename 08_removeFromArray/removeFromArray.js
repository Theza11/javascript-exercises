const removeFromArray = function(inputArray,...args) {
    return inputArray.filter(value => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
