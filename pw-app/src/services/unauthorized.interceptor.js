import axios from 'axios';
import * as authStore from "../stores/auth.store";
import { useAuth } from '../stores/auth.hooks';

export let interceptor = axios.interceptors.response.use(
    response => response,
    error => {
        debugger;
        // let { signout } = useAuth()
        // if (!!error.response && error.response.status === 401){
        //     signout();
        // }
        return Promise.reject(error);
  });