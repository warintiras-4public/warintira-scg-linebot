const express = require('express');
const linebot = require('./controllers/LINEBOT');

const app = express();

app.use('/', linebot);

