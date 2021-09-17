/**
 * 
 * @param {string} str 
 */
const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverseStr = str.split('').reverse().join('');
    if(reverseStr === str)
        return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
