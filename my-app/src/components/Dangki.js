import React, { Component } from 'react'

// import {Link} from 'react-router-dom';
export default class dangki extends Component {
    render() {
        return (
            <>
              {/* start logout */}
                <div className="container">
                <div className="row divlogin">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex anhlogin">
                        </div>
                        <div className="card-body">
                        <h5 className="card-title text-center">Đăng kí</h5>
                        <legend><a href="http://hocwebgiare.com/"><i className="glyphicon glyphicon-globe" /></a> Đăng ký thành viên!
                        </legend> 
                        <form action="http://hocwebgiare.com" method="post" className="form"> 
                            <div className="row"> 
                            <div className="col-xs-6 col-md-6"> <input className="form-control" name="firstname" placeholder="Họ" required autofocus type="text" /> 
                            </div> 
                            <div className="col-xs-6 col-md-6"> <input className="form-control" name="lastname" placeholder="Tên" required type="text" /> 
                            </div> 
                            </div>
                            <input className="form-control" name="youremail" placeholder="Email" type="email" /> <input className="form-control" name="password" placeholder="Mật khẩu" type="password" /> <input className="form-control" name="retypepassword" placeholder="Nhập lại mật khẩu" type="password" />
                            <div className="row"> 
                            </div> <label className="radio-inline">          <input name="sex" id="inlineCheckbox1" defaultValue="male" type="radio" />          Nam </label> <label className="radio-inline">          <input name="sex" id="inlineCheckbox2" defaultValue="female" type="radio" />          Nữ </label> 
                            <br /> 
                            <br /> 
                            <button className="btn btn-lg btn-primary btn-block" type="submit"> Đăng ký</button> 
                        </form> 
                        </div>
                    </div>
                    </div>
                </div>
                </div>
{/* end logout */}

            </>
        )
    }
}
