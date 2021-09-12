const reverseString = function(str) {
    let strLength = str.length;
    let result = '';

    for(let i = strLength-1; i >= 0; i--) {
        result += str[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
