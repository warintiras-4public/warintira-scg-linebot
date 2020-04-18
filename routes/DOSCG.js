const express = require('express');
const line = require('@line/bot-sdk');
const router = express.Router();

require('dotenv').config();

const app = express();

const config = {
    channelAccessToken: process.env.channelAccessToken,
    channelSecret: process.env.channelSecret
};

const client = new line.Client(config);

router.post('/linebot/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.channelAccessToken);
    // Promise
    //     .all(req.body.events.map(handleEvent))
    //     .then((result) => res.json(result));
});

function handleEvent(event) {

    console.log(event);
    if (event.type === 'message' && event.message.type === 'text') {
        handleMessageEvent(event);
    } else {
        return Promise.resolve(null);
    }
}

function handleMessageEvent(event) {
    var msg = {
        type: 'text',
        text: 'สวัสดีครัช'
    };

    return client.replyMessage(event.replyToken, msg);
}

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('run at port', app.get('port'));
});

////////////////////////////////////////////////
// const express = require('express');
// const fetch = require('node-fetch');
// const router = express.Router();

// const abc  = require('../models/DOSCG');

// const app = express();
// const port = process.env.PORT || 4000;


// app.use(express.json()); // express.json returns a middleware

// router.get('/', (req, res) => {
//     res.send('Hello SCG!');
// });

// router.get('/api/direction', async (req, res) => {
//     const api_url = 'https://maps.googleapis.com/maps/api/directions/json?origin=13.805381,100.539025&destination=13.746314,100.539276&key=AIzaSyBf_D5jSKyjwppmtL5Gsu9FR1XOaierZa8';
//     const fetch_response = await fetch(api_url);
//     const json = await fetch_response.json();
//     res.send(json);
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// router.post('/linebot/webhook', (req, res) => {
//         // res.send("Hello Webhook!");
//         // res.sendStatus(200);
//     // });
//     // app.post('/webhook', (req, res) => {
//         let reply_token = req.body.events[0].replyToken
        
//         reply(reply_token)
//         res.sendStatus(200)
//     });
//     // app.listen(port)
// app.listen(port, () => console.log(`Listening on port ${port}...`));

//     function reply(reply_token) {
//         let headers = {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer {cyNaR/BGrcuuc/AWK9TGrZ0nHbZN2nBOIAbVmn6TsbMIVZQzm+u1swGWFr8UpKVNhF2GIhYWAKI0TQi7CjYYM//R08r2iuPiI/5nkMxWOXf7OG+WaVyIC/1tpJuwz6eemIoQryMErjz42XwGAi/KSQdB04t89/1O/w1cDnyilFU=}'
//         }
//         let body = JSON.stringify({
//             replyToken: reply_token,
//             messages: [{
//                 type: 'text',
//                 text: 'Hello'
//             },
//             {
//                 type: 'text',
//                 text: 'How are you?'
//             }]
//         })
//         request.post({
//             url: 'https://api.line.me/v2/bot/message/reply',
//             headers: headers,
//             body: body
//         }, (err, res, body) => {
//             console.log('status = ' + res.statusCode);
//         });
//     }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;