const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); // middleware used to parse incoming requests into json
const morgan = require('morgan'); // morgan is a logging framework
const mongoose = require('mongoose');
const router = require('./router');
const app = express();

// db setup
mongoose.connect('mongodb://localhost/auth');

// setup app
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server running on port: ', port);


router(app);


