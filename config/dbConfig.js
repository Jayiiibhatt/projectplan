const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projectplan', {useNewUrlParser: true});
console.log("db connected");