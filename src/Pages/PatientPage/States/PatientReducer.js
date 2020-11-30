import * as actionType from './PatientActionTypes';

export const initialState = {
  doctorsList: [],
};

export default function patientDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.GET_AVAILABLE_DOCTORS:
      return { ...initialState, };
    case actionType.GET_AVAILABLE_DOCTORS_SUCCESS:
      return {...state, doctorsList: action.payload };
    default:
      return state;
  }
}
