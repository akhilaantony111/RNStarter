import * as TYPES from '../utils/Constants';

const initialState = {
    isConnected: null,
}
export default function network(state = initialState, action) {
    //Case match to action type
    switch (action.type) {
        case TYPES.CONSTANTS.NETWORK: {
            return {
                ...state, 
                isConnected: action.payload,
            }
        }
        default: {
            return {
                ...state 
            }
        }
    }
}