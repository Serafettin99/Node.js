'use strict';
const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random')
  .then(res => {
    if (res.ok) return res.json();
    else throw new Error();
  })
  .then(({ value }) => console.log(value.joke))
  .catch(err => console.log(err.message));
