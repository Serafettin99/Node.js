'use strict';
const fetch = require('node-fetch');

fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
  method: 'post',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Michael Jordan',
    numberOfPeople: 2,
  }),
})
  .then(res => {
    if (res.ok) return res.text();
    else throw new Error();
  })
  .then(console.log)
  .catch(console.log);
