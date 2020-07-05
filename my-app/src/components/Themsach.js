import React, { Component } from 'react'

export default class Themsach extends Component {
    render() {
        return (
            <>
                {/* startthêm sách */}
<div className="container">
  <div className="row">
    <div className="col-sm-4 divtongthemsach">
      <form action = "http://localhost:3001/book/addBook" method="POST" className="form-signin">
        <h4 className>Thêm sách</h4>
        <div className="form-group">
          <label>Tên sản phẩm:</label>
          <input type="text" name="tieuDe" className="form-control" placeholder="Nhập tên sản phẩm..." required />
        </div>
        <div className="form-group">
          <label htmlfor="Ten">Tác giả:</label>
          <input type="text" name="tacGia" className="form-control" placeholder="Nhập tên sách..." required />
        </div>
        <div className="form-group">
          <label htmlfor="Ten">Thể loại: </label><br />
          <select className="theloaisach" name="theLoai">
            <option value="Truyện đọc">Truyện đọc</option>
            <option value="Văn học">Văn học</option>
            <option value="Ngôn tình">Ngôn tình</option>
            <option value="Kinh doanh">Kinh doanh</option>
            <option value="Kĩ năng">Kĩ năng</option>
            <option value="Văn hóa-xã hội">Văn hóa-xã hội</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlfor="Ten">Nội dung sách:</label><br />
          <textarea className="theloaisach" name="noiDung" type="text" id="input-message" placeholder="Nhập nội dung..." required defaultValue={""} /> 
        </div>
        <div className="form-group">
          <label htmlfor="hinhanh">URL ảnh:</label>
          <input type="text" className="form-control-file border" name="anh" placeholder="Chọn ảnh..." required />
        </div>
        <button className="btn btn-lg btn-primary text-sm-center" type="submit">Thêm</button>
      </form></div>
  </div>
</div>
{/* end thêm sáhc*/}


            </>
        )
    }
}
