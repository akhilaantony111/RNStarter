import * as TYPES from '../utils/Constants';

export function checkNetwork(val) {
    return {
        type: TYPES.CONSTANTS.NETWORK,
        payload: val
    }
}

