function round(n){
  n *= 10;
  return Math.round(n) / 10;
}

const ftoc = function(f) {
  let c = (f-32) * 5 / 9;
  return round(c);
};

const ctof = function(c) {
  let f = (c * 9 / 5) + 32;
  return round(f);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
