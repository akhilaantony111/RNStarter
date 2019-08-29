import * as TYPES from '../utils/Constants';
import { AsyncStorage } from 'react-native';

const initialState = {
    loginSuccess: null,
}

export default function login(state = initialState, action) {
    //Case match to action type
    switch (action.type) {
        //If Login success
        case TYPES.CONSTANTS.LOGIN_SUCCESS: {
            AsyncStorage.setItem('isLoggedIn', JSON.stringify(true)); //Setting isLoggedIn key in AsyncStorage
            return {
                ...state, 
                loginSuccess: true,
            }
        }
        //If Login failure
        case TYPES.CONSTANTS.LOGIN_FAILURE: {
            return {
                ...state,
                loginSuccess: false
            }
        }
        default: {
            return {
                ...state //Spread operator is used because we will return the state that is intialstate. For ex if we switch into a case and then we also need other parameter which is in the initialstate we need to pass or return as spread operator. So that we can access the other params in the initial state.
            }
        }
    }
}