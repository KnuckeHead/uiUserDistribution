import * as actionType from './AuthActionTypes';

export const initialState = {
  newUser: [],
};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.GET_USER_REGISTER_DATA:
      return { ...initialState, newUser: action.payload};
    case actionType.USER_REGISTER_SUCCESS:
      return {...state, newUser: action.payload };
    default:
      return state;
  }
}
