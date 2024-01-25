import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Routes
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/register.component'
import SignIn from './components/signin.component'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Main</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/signin">Sign in</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<RegisterForm/>}/>
              <Route path="/signin" element={<SignIn/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  };
}
class Login extends Component{
  render(){
    return (
      <span>Login page</span>
    );
  }
}

class Main extends Component{
  render(){
    return (
      <span>Main page</span>
    );
  }
}

export default App;
