const repeatString = function(string, number) {
    let fullString = '';
    if (number < 0){
        fullString = 'ERROR';
        return fullString;
    }
    for (i=0; i<number; i++){
        fullString += string;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
