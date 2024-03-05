import axios from 'axios'
import * as constants from '../../../config/constants'
import * as authStore from "../../auth/stores/auth.store";

export const getCurrentUser = () => {
    var token = getToken();
    return axios.get(`${constants.PW_API}api/protected/user-info`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
}

export const getUsers = (filter) => {
    var token = getToken();
    return axios.post(`${constants.PW_API}api/protected/users/list`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: { filter: " " }
        })
};

export const createUser = (username, password, email) => {
    
    var token = getToken();
    return axios.post(`${constants.PW_API}users`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {username, password, email}
        })
};

function getToken()
{
    const token = authStore.getAccessToken();

    return token;
}
