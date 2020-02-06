import "@babel/polyfill";
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import userRouter from './routes/User';
import './models/database/db';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(userRouter);

module.exports = app;