import * as actionTypes from './PatientActionTypes';

export const getAvailableDoctors = () => ({ type: actionTypes.GET_AVAILABLE_DOCTORS });

export const getAvailableDoctorsSuccess = (doctorsList) => ({ 
    type: actionTypes.GET_AVAILABLE_DOCTORS_SUCCESS, 
    payload: doctorsList, 
});