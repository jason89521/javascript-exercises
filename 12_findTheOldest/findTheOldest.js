/**
 * 
 * @param {Array} people 
 * @returns 
 */
const findTheOldest = function( people) {
    people.sort(function(a, b){
        if(!a.yearOfDeath)
            a.yearOfDeath = (new Date()).getFullYear();
        if(!b.yearOfDeath)
            b.yearOfDeath = (new Date()).getFullYear();
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        return aAge > bAge ? 1 : -1;
    });
    return people[people.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
