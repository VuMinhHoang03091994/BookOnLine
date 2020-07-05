import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
import Newsach from './Newsach.js';

var axios = require('axios').default;

class Home extends Component {
  constructor(){
    super();
    this.state = {
      books: []
    }
  }
  handleDelete = async(id)=>{
    await axios.post('http://localhost:3001/book/deleteBook',{_id:id});
    this.getBook();
}
  componentDidMount(){
    this.getBook();
  }
  getBook = async()=>{
    let res = await axios.get('http://localhost:3001/book');
    // console.log(res.data);
    this.setState({
      books: [...res.data]
    })
  }
    render() {
      const {books} = this.state;
        return (
  <>
  {/* Phần loại sách */}
 
  <div className="container">
    <div className="row noidung">
            {books.map((book,index)=>{
              return <Newsach key={index} _id = {book._id} 
              anh={book.anh} tieuDe={book.tieuDe} handleDelete={this.handleDelete}></Newsach>
            })}
    </div>
    <hr />
    <hr />
    {/*hết Phần loại sách */}
  </div>
</>

        )
    }
}

export default Home;