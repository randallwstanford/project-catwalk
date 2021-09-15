const express = require('express');
const https = require('https');
const path = require('path');
const axios = require('axios');
const config = require('../config/config.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

app.get('/*', (req, res) => {
  console.log(req.method, req.url);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-den${req.url}`, {
    headers: {
      'Authorization': config.TOKEN
    }
  })
    .then(response => {
      console.log(response);
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});