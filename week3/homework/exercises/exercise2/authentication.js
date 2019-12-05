'use strict';
const fetch = require('node-fetch');

fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
  headers: {
    Authorization: `Basic ${new Buffer.from('admin:hvgX8KlVEa').toString(
      'base64',
    )}`,
  },
})
  .then(res => {
    if (res.ok) return res.json();
    else throw new Error();
  })
  .then(console.log)
  .catch(err => console.log(err.message));
