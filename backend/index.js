const express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

const bookRoute = require('./routes/book.route');


const app = express();

var cors = require('cors')
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/bookshop', {useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

app.use('/book',cors(),bookRoute);

const port = 3001;
app.listen(port);