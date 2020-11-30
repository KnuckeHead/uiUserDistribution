import * as actionTypes from './AdminActionTypes';


export const getAllUsers = () => ({ type: actionTypes.GET_ALL_USERS });

export const getAllUsersSuccess = users => ({
  type: actionTypes.GET_ALL_USERS_SUCCESS,
  payload: users,
});

export const setCurrentUserId = (id) => ({
  type:actionTypes.GET_USER,
  payload: id,
});

export const getUserSuccess = (user) => ({
  type: actionTypes.GET_USER_SUCCESS,
  payload: user,
});

export const addUser = () => ({ type: actionTypes.ADD_USER});

export const deleteUser = id => ({
  type: actionTypes.DELETE_USER,
  payload: id,
});

