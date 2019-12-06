const express = require('express');
const expHandlebars = require('express-handlebars');
const app = express();
const axios = require('axios');
const KEYS = require('./sources/keys.json');
app.engine('handlebars', expHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/weather', express.urlencoded({ extended: true }), (req, res) => {
  const cityName = req.body.cityName;
  if (cityName) {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?APPID=${KEYS.API_KEY}&q=${cityName}&units=metric`,
    )
      .then(response =>
        res.render('index', {
          weatherText: `${cityName}: ${response.data.main.temp} °C`,
        }),
      )
      .catch(() => res.render('index', { weatherText: 'City is not found' }));
  } else res.status(400).send('Bad request');
});

app.listen(3000);
