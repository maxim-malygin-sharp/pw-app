import axios from "axios";
import * as constants from '../../../config/constants'

export const getTransactions = (token) => {
    debugger;
    return axios.get(`${constants.PW_API}api/protected/transactions`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
}
