const mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({tieuDe:String,tacGia: String,theLoai: String,noiDung: String,anh: String});

var BookModel = mongoose.model('BookModel',BookSchema,'books');

module.exports = BookModel;
