const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/User');
const question = require('./routes/question');
const answer = require('./routes/answer');
require('./models/database/db');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/v1', user);
app.use('/api/v1', question);
app.use('/api/v1', answer);

module.exports = app;