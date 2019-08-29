import * as Login from './login'
import * as Network from './network'


export const ActionCreators = Object.assign({}, //Combining all actions together
    Login,
    Network
);