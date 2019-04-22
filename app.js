const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// access db
const db = require('./config/dbConfig');

// Middlewares

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes


// error handling

app.listen(3001, () => {
    console.log(`server connected on port 3001`);
});