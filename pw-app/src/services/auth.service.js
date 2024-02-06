import axios from 'axios'
import { PW_API } from '../config/constants'

export const signUp = (username, email, password) => {
    return axios.post(PW_API+ "users", {username: username, email: email, password: password});
};

export const signIn = (email, password) => {
    debugger;
    return axios.post(PW_API+"sessions/create", {email: email, password: password});
};
