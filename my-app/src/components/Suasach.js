import React, { Component } from 'react'
var axios = require('axios').default;

export default class Suasach extends Component {
  constructor(){
    super();
    this.state={
      book: ''
    }
  }
  componentDidMount(){
    this.getBookDetails();
  }
  getBookDetails = async()=>{
    let res = await axios.post('http://localhost:3001/book/details',{_id:this.props.match.params.bookId});
    this.setState({
      tieuDe: res.data.tieuDe,
      tacGia: res.data.tacGia,
      theLoai: res.data.theLoai,
      noiDung: res.data.noiDung,
      anh: res.data.anh
    })
  }
  tieuDeChange = (event)=>{
    this.setState({
      tieuDe: event.target.value
    })
  }
  tacGiaChange = (event)=>{
    this.setState({
      tacGia: event.target.value
    })
  }
  theLoaiChange = (event)=>{
    this.setState({
      theLoai: event.target.value
    })
  }
  noiDungChange = (event)=>{
    this.setState({
      noiDung: event.target.value
    })
  }
  anhChange = (event)=>{
    this.setState({
      anh: event.target.value
    })
  }
    render() {
      let _id = this.props.match.params.bookId;
      let {tieuDe,tacGia,theLoai,noiDung,anh} = this.state;
        return (
            <>
                {/* start login */}
<div className="container">
  <div className="row">
    <div className="col-sm-4 divtongthemsach">
      {/* action = "http://localhost:3001/book/updateBook" */}
    <form action = "http://localhost:3001/book/updateBook" method="POST" className="form-signin">
        <h4>Sửa sách</h4>
        <input type="hidden" className="form-control" value={_id} name="_id" required />
        <div className="form-group">
          <label>Tên sách:</label>
          <input type="text" className="form-control" value={tieuDe} onChange = {this.tieuDeChange} name="tieuDe" required />
        </div>
        <div className="form-group">
          <label htmlFor="Ten">Tác giả:</label>
          <input type="text" className="form-control" value={tacGia} onChange = {this.tacGiaChange} name="tacGia" required />
        </div>
        <div className="form-group">
          <label htmlFor="Ten">Thể loại: </label><br />
          <select className="theloaisach" name="theLoai" value={theLoai} onChange = {this.theLoaiChange}>
            <option value="Truyện đọc">Truyện đọc</option>
            <option value="Văn học">Văn học</option>
            <option value="Ngôn tình">Ngôn tình</option>
            <option value="Kinh doanh">Kinh doanh</option>
            <option value="Kĩ năng">Kĩ năng</option>
            <option value="Văn hóa-xã hội">Văn hóa-xã hội</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Ten">Nội dung sách:</label><br />
          <textarea className="theloaisach" name="noiDung" type="text" id="input-message"
          value={noiDung} onChange = {this.noiDungChange} required defaultValue={""} /> 
        </div>
        <div className="form-group">
          <label htmlFor="hinhanh">Hình ảnh:</label>
          <input type="text" className="form-control-file border" name="anh" 
          value={anh} onChange = {this.anhChange} required />
        </div>
        <button className="btn btn-lg btn-primary text-sm-center" type="submit">Lưu</button>
      </form></div>
  </div>
</div>
{/* end login */}


            </>
        )
    }
}
