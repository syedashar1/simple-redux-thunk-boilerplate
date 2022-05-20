import Axios from 'axios';
import { USER_REGISTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_FAIL , USER_SIGNIN_SUCCESS , USER_SIGNIN_FAIL , USER_LIST_REQUEST
        , USER_DETAILS_REQUEST , USER_DETAILS_SUCCESS , USER_DETAILS_FAIL , USER_SIGNOUT , USER_SIGNIN_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, SEARCH_USERS_REQUEST, SEARCH_USERS_SUCCESS, SEARCH_USERS_FAIL, USER_UPDATE_PROFILE_RESET, USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_PROFILE_FAIL, USERS_SUGGESTIONS_SUCCESS, USERS_SUGGESTIONS_REQUEST
 } from "../types/userTypes";


 export const signin = (email : string , password : string) => async (dispatch : any ) => {
  
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  
    try {
          const { data } = await Axios.post('/api/users/signin', { email, password });
          dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
          localStorage.setItem('userInfo', JSON.stringify(data));
          console.log('signed in');
          } 
  
    catch (error : any ) {
          dispatch({
                  type: USER_SIGNIN_FAIL,
                  payload:
                  error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      });
      console.log('nope');
    }
  };