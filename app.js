// //***********/ Sample 1 (get)
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello');
// });

// app.listen(process.env.PORT || 3000, () => {
//     console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
//     });


// //***********/ Sample 2 (Express)
const express = require('express');
const app = express();
const router = express.Router();

router.get('/home', (req, res) => {
    res.send('Hello World , this is home router!');
});

router.get('/profile', (req, res) => {
    res.send('Hello World, this is profile router!');
});

router.get('/login', (req, res) => {
    res.send('Hello World, this is login router!');
});

router.get('/logout', (req, res) => {
    res.send('Hello World, this is logout router!');
});

router.get('/', (req, res) => {
    res.send('Hello World, this is the home page router!');
});

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});   