import axios from "axios";
import * as constants from '../../../config/constants'

export const getTransactions = (token) => {
    
    return axios.get(`${constants.PW_API}api/protected/transactions`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
}

export const createTransactions = (token, name, amount) => {
    
    return axios.post(`${constants.PW_API}api/protected/transactions`, { name, amount },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
}