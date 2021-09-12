const sumAll = function(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return 'ERROR';
    }

    if(num1 < 0 || num2 < 0){
        return 'ERROR';
    }

    let abs_difference = Math.abs(num1 - num2) + 1;
    let result = ((num1 + num2) * abs_difference) / 2;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
