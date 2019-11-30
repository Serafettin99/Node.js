const express = require('express');
const expHandlebars = require('express-handlebars');
const app = express();
const axios = require('axios');

app.engine('handlebars', expHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/weather', express.urlencoded({ extended: true }), (req, res) => {
  const cityName = req.body.cityName;
  if (cityName) res.send({ cityName });
  else res.status(400).send('Bad request');
});

app.listen(3000);
