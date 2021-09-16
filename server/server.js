const express = require('express');
const https = require('https');
const path = require('path');
const axios = require('axios');
const config = require('../config/config.js');

const app = express();
const port = 3000;

console.log(config.TOKEN);
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

app.use('/*', (req, res) => {
  console.log(req.method, req.url);
  axios({
    method: req.method.toLowerCase(),
    data: req.body,
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-den${req.originalUrl}`,
    headers: {
      'Authorization': config.TOKEN
    }
<<<<<<< HEAD
  }).then(response => { res.send(response.data); })
    .catch(err => { console.log(err); res.status(500).end(); });
=======
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err.response.data);
    });
>>>>>>> f28854b (Change price based on the style selected.)
});



app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});