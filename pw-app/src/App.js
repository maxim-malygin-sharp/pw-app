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
import { Provider } from "react-redux";
import reducers from './reducers'
import { createStore } from 'redux'

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Main</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Sign up</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<RegisterForm/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      </Provider>
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
