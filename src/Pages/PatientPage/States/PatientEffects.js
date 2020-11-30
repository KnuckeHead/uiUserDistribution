import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../../Api/PatientApi';
import * as actions from './PatientActions';
import * as actionTypes from './PatientActionTypes';

function* getAllAvailableDoctors() {
  const doctorsList = yield call(api.fetchAvaiableDoctorsApi);
  yield put(actions.getAvailableDoctorsSuccess(doctorsList));
}

export function* PatientDashboardEffects() {
   yield takeEvery(actionTypes.GET_AVAILABLE_DOCTORS, getAllAvailableDoctors);
 }
 