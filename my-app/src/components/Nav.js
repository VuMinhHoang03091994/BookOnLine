import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import auth from './Auth'

class Nav extends Component {
  handleLogOut =()=>{
    auth.logout(()=>{
      this.props.history.push("/");
  })
  }
    render() {
        return (
            <>
  {/* Navigation phần menu */}
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-custom">
    <div className="container">
      <NavLink className="navbar-brand" to='/Home'>Sách Online</NavLink>
      <form className="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit"><i className="fa fa-search" /></button>
      </form>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
           
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/Themsach'>
              <button type="button" className="btn btn-outline-primary">Thêm sách</button></NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link"  to='/logout'>
              <button type="button" className="btn btn-outline-danger">Đăng xuất</button></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to='/Dangki'>
              <button type="button" className="btn btn-outline-primary">Đăng kí</button></NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* hết phần mune */}
</>

        )
    }
}
export default withRouter (Nav)

