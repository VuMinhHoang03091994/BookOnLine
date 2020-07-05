const express = require('express');

var bookRoute = express.Router();

var bookController = require('../controllers/book.controller');

bookRoute.get('/',bookController.getData)
bookRoute.post('/details',bookController.getDetails)
bookRoute.post('/addBook',bookController.addBook)
bookRoute.post('/updateBook',bookController.updateBook)
bookRoute.post('/deleteBook',bookController.deleteBook)

module.exports = bookRoute;