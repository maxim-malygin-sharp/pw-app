import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Routes
} from "react-router-dom";
import './App.css';
import RegisterForm from './components/register.component'
import SignIn from './components/signin.component'
import TransactionsComponent from "./components/transactions.component";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Transactions</NavLink></li>
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/signin">Sign in</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<TransactionsComponent/>}/>
              <Route path="/signup" element={<RegisterForm/>}/>
              <Route path="/signin" element={<SignIn/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
