import axios from 'axios'

export const singUp = (username, email, password) => {
    return axios.post(process.env.PW_API + "users", {username: username, email: email, password: password});
};

export const singIn = (email, password) => {
    return axios.post(process.env.PW_API + "sessions/create", {email: email, password: password});
};