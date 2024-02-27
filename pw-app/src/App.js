import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Routes
} from "react-router-dom";
import './App.css';
import RegisterForm from './components/register.component'
import { SignIn } from './components/signin.component'
import TransactionsComponent from "./components/transactions.component";
import CreateTransactionComponent from "./components/create.transaction.component";
import { StateProvider } from "./providers/auth.provider";
import { RequireAuth } from "./providers/auth.required";
import { NoAuth } from "./providers/auth.not.required";
import { HOME, SIGN_IN, SIGN_UP } from './constants/routes';
import { interceptor } from "./services/unauthorized.interceptor";

import reducers from "./reducers";
import sagas from "./sagas";
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { AuthStatus } from "./components/auth.status.component";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(sagas);

class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to={HOME}>Transactions</NavLink></li>
              <li><NavLink to={SIGN_UP}>Sign up</NavLink></li>
              <li><NavLink to={SIGN_IN}>Sign in</NavLink></li>
            </ul>
            <div className="content">
              <StateProvider initialState={{}} reducer={store.reducer}>
                <Routes>
                  <Route exact path={HOME} element={   
                    <RequireAuth>
                      <div>
                        <AuthStatus />
                        <TransactionsComponent/>
                      </div>
                    </RequireAuth>
                  }/>
                  <Route path={SIGN_UP} element={
                    <NoAuth>
                      <RegisterForm/>
                    </NoAuth>
                    }/>
                  <Route path={SIGN_IN} element={
                    <NoAuth>
                      <SignIn/>
                    </NoAuth>
                    }/>
                </Routes>
              </StateProvider>
            </div>
          </div>
        </BrowserRouter>
        </Provider>
    );
  };
}

export default App;
