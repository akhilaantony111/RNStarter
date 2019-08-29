import { apiMethod } from '../services/ApiMethods';
import * as TYPES from '../utils/Constants';

export const loginApi = (params) => {
    return apiMethod.post(TYPES.URL.LOGIN_URL, params) //Calling the post menthod with url and parameters
}