import * as actionType from './AdminActionTypes';

export const initialState = {
  usersList: [],
  user: {},
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.GET_ALL_USERS:
      return { ...initialState, };
    case actionType.GET_ALL_USERS_SUCCESS:
      return {...state, usersList: action.payload };
    case actionType.GET_USER:
      return {...state, user: action.payload};
    case actionType.GET_USER_SUCCESS:
      return {...state, user: action.payload };
    default:
      return state;
  }
}
