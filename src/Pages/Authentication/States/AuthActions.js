import * as actionTypes from './AuthActionTypes';

export const RegisterUser = (newUser) => ({
    type: actionTypes.GET_USER_REGISTER_DATA, 
    payload: newUser
});