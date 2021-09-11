const express = require('express');
const https = require('https');
const path = require('path');
const api_key = require('../config/config.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});