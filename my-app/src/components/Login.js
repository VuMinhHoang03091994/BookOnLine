import React, { Component } from 'react'
import {Link } from 'react-router-dom';
class login extends Component {
    render() {
        return (
            <>
                {/* start login */}
                <div className="container">
                <div className="row divlogin">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-signin flex-row my-5">
                        <div className="card-img-left d-none d-md-flex anhlogin">
                        <img src="images/user1.jpg" alt="" />
                        </div>
                        <div className="card-body">
                        <h5 className="card-title text-center">Đăng nhập</h5>
                        <div className="form-signin">
                            <div className="form-label-group">
                            <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autoFocus />
                            <label htmlFor="inputUserame">Username</label>
                            </div>
                            <hr />
                            <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <label htmlFor="inputPassword">Password</label>
                            </div>
                            <Link to="/home"><button className="btn btn-lg btn-primary btn-block text-uppercase" >Đăng nhập</button></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* end login */}

            </>
        )
    }
}
export default login;