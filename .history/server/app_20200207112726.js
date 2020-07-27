import "@babel/polyfill";
import express from 'express';
import bodyParser from 'body-parser';

import user from './routes/user';
import question from './routes/question';
import answer from './routes/answer';
import './models/database/db';

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