import { USER_REGISTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_FAIL , USER_SIGNIN_SUCCESS , USER_SIGNIN_FAIL , USER_LIST_REQUEST
    , USER_DETAILS_REQUEST , USER_DETAILS_SUCCESS , USER_DETAILS_FAIL , USER_SIGNOUT , USER_SIGNIN_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, SEARCH_USERS_REQUEST, SEARCH_USERS_SUCCESS, SEARCH_USERS_FAIL, SEARCH_USERS_RESET, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_RESET, USER_UPDATE_PROFILE_SUCCESS, USERS_SUGGESTIONS_REQUEST, USERS_SUGGESTIONS_FAIL, USERS_SUGGESTIONS_SUCCESS
} from "../types/userTypes";


interface IAction  {
    type : string ,
    payload? : object
}


export const userSigninReducer = (
    
    state = { 
        
        userInfo : localStorage.getItem('userInfo') ? 
            JSON.parse((localStorage as any ).getItem('userInfo'))
            : null ,
        
        }

            , action : IAction ) => 
    
    {switch (action.type) {

            case USER_SIGNIN_REQUEST:
                    return { loading: true };

            case USER_SIGNIN_SUCCESS:
                    console.log('signing');
                    return { loading: false, userInfo: action.payload };

            case USER_SIGNIN_FAIL:
                    return { loading: false, error: action.payload };

            case USER_SIGNOUT:
                    return {};

            default:
            return state;
    }
};



export const userRegisterReducer = (state = {}, action : IAction) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        console.log('USER_REGISTER_SUCCESS');
        return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};

