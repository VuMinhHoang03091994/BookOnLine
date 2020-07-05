import React, { Component } from 'react'
var axios = require('axios').default;

export default class Chitiet extends Component {
    constructor(){
        super();
        this.state = {
            book: ''
        }
    }
    componentDidMount(){
        this.getBookDetails();
    }
    getBookDetails = async()=>{
        let res = await axios.post('http://localhost:3001/book/details',{_id:this.props.match.params.bookId});
        this.setState({
            book: res.data
        })
    }
    render() {
        let {book} = this.state;
        return (
            <div className="container">
                <div className="row divtongchitiet">
                    <div className="col-sm-4 divanh">
                    <img src={book.anh} alt="" />
                    </div>
                    <div className="col-sm-8 divthongtin">
                    <h4>{book.tieuDe}</h4>
                    <span>Tác giả: </span><h5 className="chitiet1">{book.tacGia}</h5><br />
                    <span>Thể loại: </span><h5 className="chitiet1">{book.theLoai}</h5><br />
                    <a className="nav-link" href="/"><button type="button" className="btn btn-outline-primary">Đọc sách</button></a><br/>
                    <span>Nội dung: </span><h5 className="chitiet1">{book.noiDung}</h5>
                    
                    </div>
                </div>
            </div>
        )
    }
}
