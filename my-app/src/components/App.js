import React, { Component } from 'react';
import './../css/App.css';

import Nav from './Nav.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Login from './Login.js';
import Dangki from './Dangki.js';
import Themsach from './Themsach.js';
import Suasach from './Suasach.js';
import Chitiet from './Chitiet.js';
import PrivateRoute from './PrivateRoute.js';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  
  render() {
    return (
      <div className="013">
      <Router>
          {/* / vào Login đầu tiên */}
          <Route path = "/" exact component={Login}/>
          {/* <PrivateRoute path = "/Home" render={()=>{
            return(
              <Router>
                <Nav/>
                <Switch>
                    <Route path="/Chitiet/:bookId" exact component={Chitiet}/>
                    <Route path="/Home" exact component={Home}/> 
                    <Route path="/Dangki" exact component={Dangki}/>
                    <Route path="/Themsach" exact component={Themsach}/>
                    <Route path="/Suasach/:bookId" exact component={Suasach}/> 
                    <Route path="/Logout" exact component={Login}/>
                </Switch> 
                <Footer/>
                </Router>)}}
          /> */}
          <Route path = "/Home" render={()=>{
            return(
              <Router>
                <Nav/>
                <Switch>
                    <Route path="/Chitiet/:bookId" exact component={Chitiet}/>
                    <Route path="/Home" exact component={Home}/> 
                    <Route path="/Dangki" exact component={Dangki}/>
                    <Route path="/Themsach" exact component={Themsach}/>
                    <Route path="/Suasach/:bookId" exact component={Suasach}/> 
                    <Route path="/Logout" exact component={Login}/>
                </Switch> 
                <Footer/>
              </Router>)
          }} />
      </Router>  
      </div>
    );
  }
  
}

export default App;