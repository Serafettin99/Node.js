'use strict';
const Handlebars = require('handlebars');

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];
const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

const getRandom = array => array[Math.floor(Math.random() * array.length)];
const source = `<p> {{subject}} is a slippery slope that leads to {{punchline}} </p>`;
const template = Handlebars.compile(source);
const result = template({
  subject: getRandom(subjects),
  punchline: getRandom(punchlines),
});

console.log(result);
