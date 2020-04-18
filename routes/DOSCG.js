const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const abc  = require('../models/DOSCG');

const app = express();

app.use(express.json()); // express.json returns a middleware

router.get('/', (req, res) => {
    res.send('Hello SCG!');
});

router.get('/api/direction', async (req, res) => {
    const api_url = 'https://maps.googleapis.com/maps/api/directions/json?origin=13.805381,100.539025&destination=13.746314,100.539276&key=AIzaSyBf_D5jSKyjwppmtL5Gsu9FR1XOaierZa8';
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.send(json);
});

router.get('/api/XYZ', (req, res) => {
    const xyz = [
        { val: "X" }, 
        { val: "Y" }, 
        { val: 5 },  
        { val: 9 }, 
        { val: 15 }, 
        { val: 23 }, 
        { val: "Z" }
    ];

    //  Y - X  is  0
    //  5 - Y  is  2
    //  9 - 5  is  4
    // 15 - 9  is  6
    // 23 - 15 is  8
    //  Z - 23 is 10

    let arr= [];
    for (i = 0; i < xyz.length; i++) {
        if (i > 0) {
            arr[i]  = xyz[i+1]-(i*2) ;
        } 
        // else {
        //     arr[i] = 0;
        // }
    }




    // let arr= [];
    // for (i = 0; i < myArray.length; i++) {
        // text += cars[i] + "<br>";
    //    if (isNan(myArray[i])) {
        // arr[i] 
    //    }


    // const five = xyz.find(x => x.val === 5).value;
    // const nine = xyz.find(x => x.val === 9).value;
    // const fifteen = xyz.find(x => x.val === 15).value;
    // const twentythree = xyz.find(x => x.val === 23).value;

    // let arr= [];
    // for (i = 0; i < myArray.length; i++) {
        // text += cars[i] + "<br>";
    //    if (isNan(myArray[i])) {
        // arr[i] 
    //    }

        // arr[i] = myArray[];
    // }
    
    // const xyz = [
    //     { key: 0, value: "X" },
    //     { key: 1, value: "Y" },
    //     { key: 2, value: 5 },
    //     { key: 3, value: 9 },
    //     { key: 4, value: 15 },
    //     { key: 5, value: 23 },
    //     { key: 6, value: "Z" },
    // ];
    // const five = model.find(x => x.id === 5).value;
    // const nine = xyz.find(x => x.value === 9).value;
    // const fifteen = xyz.find(x => x.value === 15).value;
    // const twentythree = xyz.find(x => x.value === 23).value;
    
    // const XYZ = {
        // five: five
        // nine: nine,
        // fifteen: fifteen,
        // twentythree: twentythree
    // };
    res.send(arr);
});

router.get('/api/abc', (req, res) => {
    // const a = 21;
    // const ab = 23;
    // const ac = -21;
    const a = abc.find(x => x.id === "a").value;
    const ab = abc.find(x => x.id === "ab").value;
    const ac = abc.find(x => x.id === "ac").value;

    // const b = 23-21;
    const b = ab-a;

    // const c = -21-21
    const c = ac-a

    const bc = { 
        b: b,
        c: c
    };

    res.send(bc);
});

router.get('/linebot/webhook', (req, res) => {
        res.send("Hello Webhook!");
    });
    

// router.post('/', (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });



// router.post('/', (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });

// router.get('/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) res.status(404).send('The course with the given id was not found.')
//     res.send(course);
// });

// app.get('/api/posts/:year/:month', (req, res) => {
//     // res.send(req.params); // read year and month
//     res.send(req.query); // read query string
// });

module.exports = router;