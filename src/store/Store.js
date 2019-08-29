import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import AppReducer from '../reducers/index';

function configureStore(initialState) {
    const enhancer = compose(applyMiddleware(thunkMiddleware));
    return createStore(AppReducer, initialState, enhancer); //Creating store file with reducer and thunk middleware
}

const store = configureStore({});
export default store; 