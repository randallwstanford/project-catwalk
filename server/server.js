const express = require('express');
const https = require('https');
const path = require('path');
const axios = require('axios');
const config = require('../config/config.js');

const app = express();
const port = 3000;

console.log(config.API_KEY);
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

app.use('/*', (req, res) => {
  console.log(req.method, req.url);
  axios({
    method: req.method.toLowerCase(),
    data: req.body,
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-den${req.originalUrl}`,
    headers: {
      'Authorization': config.API_KEY
    }
  }).then(response => { res.send(response.data); })
    .catch(err => { console.log(err); res.status(500).end(); });
});



app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});