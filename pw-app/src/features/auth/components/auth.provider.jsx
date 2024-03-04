import { React, createContext, useState, useContext, useReducer } from 'react';
import AuthStatus from "./auth.status.component";

export class AuthContextType
{
  user;
}
export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);