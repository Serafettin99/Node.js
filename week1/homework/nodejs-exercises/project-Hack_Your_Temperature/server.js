const express = require('express');
const app = express();

const axios = require('axios');
const expressHandleBars = require('express-handlebars');

app.get('/', function(req, res) {
  res.send('hello from backend to frontend!!!!');
});

app.listen(3000);
