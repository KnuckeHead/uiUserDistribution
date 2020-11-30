import { call, takeEvery } from 'redux-saga/effects';
import * as api from '../../../Api/AuthenticationApi';
import * as actionTypes from './AuthActionTypes';

function* registerUser(action) {
  yield call(api.RegisterUser, action.payload);
}

export function* UserAuthenticationEffects() {
   yield takeEvery(actionTypes.GET_USER_REGISTER_DATA, registerUser);
 }
 