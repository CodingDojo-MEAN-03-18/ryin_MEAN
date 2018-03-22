var mathlib = require('./mathlib.js')();     //notice the extra invocation parentheses!
console.log(mathlib);
mathlib.add(1,2);
mathlib.multiply(2,3);
mathlib.square(2);
mathlib.random(1,35);