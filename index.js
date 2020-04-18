const express = require('express');
const linebot = require('./routes/LINEBOT');

const app = express();

app.use('/', linebot);

