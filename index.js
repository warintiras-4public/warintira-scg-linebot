const express = require('express');
const doscg = require('./routes/DOSCG');
const linebot = require('./routes/LINEBOT');
const config = require('dotenv').config;

const app = express();

// const router = require('./routes/router');
// app.use('/', router);
// const doscg = require('./routes/doscg');
// app.use('/', doscg);
app.use(express.json()); // express.json returns a middleware
app.use('/api', doscg);
app.use('/linebot', linebot);

// const courses = [
//     { id: 1, name: "course1"},
//     { id: 2, name: "course2"},
//     { id: 3, name: "course3"},
// ];

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

