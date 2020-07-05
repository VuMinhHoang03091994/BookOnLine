import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <>
                <div className="bottom_footer fixed-bottom ">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-9">
                            Vũ Minh Hoàng 2020 | Chào mừng bạn đã đến đây | Liên hệ với chúng tôi
                        </div>
                        <div className="col-sm-3">
                            <div className="mangxh float-xs-right">
                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                            <a href="/"><i className="fa fa-twitter" /></a>
                            <a href="https://www.google.com.vn/"><i className="fa fa-google-plus" /></a>
                            <a href="/"><i className="fa fa-yahoo" /></a>
                            </div>
                        </div>
                        </div>
                    </div>      
                    </div>{/* end bottom_footer*/}

            </>
        )
    }
}
export default  Footer;