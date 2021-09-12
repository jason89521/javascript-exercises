/**
 * 
 * @param {array} arr 
 * @param  {...any} toBeRemoved 
 */
const removeFromArray = function(arr, ...toBeRemoved) {
    let len_toBeRemoved = toBeRemoved.length;
    for(let i = 0; i < len_toBeRemoved; i++){
        let idx = arr.indexOf(toBeRemoved[i]);
        if(idx !== -1)
            arr.splice(idx, 1);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
