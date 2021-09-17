const fibonacci = function(n) {
    if(n < 0) return 'OOPS';
    n = parseInt(n, 10);
    let prev1 = 0;
    let prev2 = 0;
    let current = 0;

    for(let i = 0; i < n; i++) {
        if(i === 0)
            current = 1;
        else
            current = prev1 + prev2;
        
        prev1 = prev2;
        prev2 = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
