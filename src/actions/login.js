import * as TYPES from '../utils/Constants';
import { loginApi } from '../services/ServiceMethods';

export function login(params) {
    return (dispatch, getState) => {
        //From getState() we can access the reducer values
        return loginApi(params).then(response => { //Fetch call 
            return response //Getting response 
        }).then(response => {
            return response.json().then((responseJson) => {
                if (response.status == 200) {
                    dispatch(loginSuccess(responseJson)) 
                }
            })
        }).catch(err => {
            dispatch(loginError(err))
        })
    }
}

export function loginSuccess(responseJson) {
    return {
        type: TYPES.CONSTANTS.LOGIN_SUCCESS,
        payload: responseJson
    }
}

export function loginError(error) {
    return {
        type: TYPES.CONSTANTS.LOGIN_FAILURE
    }
}

