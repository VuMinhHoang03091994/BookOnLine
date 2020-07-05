import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Newsach extends Component {
    // constructor (props){
    //     super(props);

    // }
    handleDeleteOnClick = async()=>{
        this.props.handleDelete(this.props._id)
    }
    render() {
        return (
            <div className="col-sm-2 khoianh">
                <Link to={`/Chitiet/${this.props._id}`}><img src={this.props.anh} alt="" /></Link>
                <h4 className="card-title">{this.props.tieuDe}</h4>
                <div className="nutchitiet">
                <Link className="nav-link" to={`/Suasach/${this.props._id}`}>
                    <button type="button" className="btn btn-outline-primary">Sửa</button>
                </Link>
                <div className="nav-link">
                    <button type="button" onClick = {this.handleDeleteOnClick} className="btn btn-outline-primary">Xóa</button>
                </div>
                </div>
            </div>
        )
    }
}
