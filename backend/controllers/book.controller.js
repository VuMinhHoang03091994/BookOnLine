var BookModel = require('../models/book.model');
module.exports = {
    getData: async (req,res)=>{
        let data = await BookModel.find();
        // console.log('book',data);
        res.send(data);
    },
    addBook: async (req,res)=>{
        // console.log(req.body)
        let {tieuDe,tacGia,theLoai,noiDung,anh} = req.body;
        let book = new BookModel({ tieuDe: tieuDe,tacGia: tacGia,theLoai: theLoai ,noiDung: noiDung,anh:anh });
        book.save();
        res.redirect('http://localhost:3000/Home')
    },
    getDetails: async (req,res)=>{
        let {_id} = req.body;
        let content = await BookModel.findById(_id);
        res.send(content)
    },
    updateBook: async (req,res)=>{
        let {_id,tieuDe,tacGia,theLoai,noiDung,anh} = req.body;
        await BookModel.update({ _id: _id }, { tieuDe: tieuDe,tacGia:tacGia,
            theLoai:theLoai,noiDung:noiDung,anh:anh });
        res.redirect('http://localhost:3000/Home')
    },
    deleteBook: async (req,res)=>{
        let {_id} = req.body;
        await BookModel.deleteOne({ _id: _id });
        res.status(200).send()
    }
}