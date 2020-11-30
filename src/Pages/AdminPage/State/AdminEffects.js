import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from './AdminActions';
import * as api from '../../../Api/AdminPageApi';
import * as actionTypes from './AdminActionTypes';

function* fetchAllUsersEffect() {
  const users = yield call(api.fetchAllUsersApi);
  yield put(actions.getAllUsersSuccess(users));
}

function* fetchSingleUserEffect(action) {
  const user = yield call(api.fetchUserApi, action.payload);
  yield put(actions.getUserSuccess(user));
}

function* addUserEffect(action) {
  const addUserDetails = yield call(api.addUserApi, action.payload);
  yield put(actions.getAllUsersSuccess(addUserDetails));
}

function* deleteUserEffect(action) {
  const deleteUser = yield call(api.deleteUserApi, action.payload);
  yield put(actions.getAllUsersSuccess(deleteUser));
}


 export function* AdminEffects() {
   yield takeEvery(actionTypes.GET_ALL_USERS, fetchAllUsersEffect);
   yield takeEvery(actionTypes.GET_USER, fetchSingleUserEffect);
   yield takeLatest(actionTypes.ADD_USER, addUserEffect);
   yield takeLatest(actionTypes.DELETE_USER, deleteUserEffect);
 }
 
  