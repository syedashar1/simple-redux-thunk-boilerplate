import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';


const initialState = {};

const reducer = combineReducers({

    userSignin : userSigninReducer ,
    userRegister : userRegisterReducer ,
    
});


const composeEnhancer =  compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);


export default store;