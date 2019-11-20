'use strict';

const andrejsFunction = require('./andrejs-awesome-function.js');
const numbers = ['12', '846', '2', '1236'];

numbers.forEach(number => {
  const requestedNumbers = andrejsFunction.padLeft(number, 4, ' ');
  console.log(requestedNumbers);
});
