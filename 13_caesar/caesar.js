/**
 * 
 * @param {string} str 
 * @param {number} n
 */
const caesar = function(str, n) {
    n = n%26;
    if(n < 0)
        n = 26 + n;
    let result = '';
    for(let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt(0);
        let toAdd = n;
        if(isUpper(str[i])) {
            if(charCode + n > 'Z'.charCodeAt(0)) {
                toAdd = charCode + n - 'Z'.charCodeAt(0);
                charCode = 'A'.charCodeAt(0)-1;
            }
        }
        else if(isLower(str[i])) {
            if(charCode + n > 'z'.charCodeAt(0)) {
                toAdd = charCode + n - 'z'.charCodeAt(0);
                charCode = 'a'.charCodeAt(0)-1;
            }
        }else{
            toAdd = 0;
        }

        result += String.fromCharCode(charCode + toAdd);
    }

    return result;
};

/**
 * 
 * @param {string} char 
 */
function isLower(char) {
    const charCode = char.charCodeAt(0);
    const aUnicode = 'a'.charCodeAt(0);
    const zUnicode = 'z'.charCodeAt(0);
    if(charCode >= aUnicode && charCode <= zUnicode)
        return true;

    return false;
}

function isUpper(char) {
    const charCode = char.charCodeAt(0);
    const AUnicode = 'A'.charCodeAt(0);
    const Zunicode = 'Z'.charCodeAt(0);
    if(charCode >= AUnicode && charCode <= Zunicode)
        return true;

    return false;
}

// Do not edit below this line
module.exports = caesar;
