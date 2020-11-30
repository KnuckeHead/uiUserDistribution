import { combineReducers } from 'redux';

import adminReducer from '../Pages/AdminPage/State/AdminReducer';
import patientDashboardReducer from '../Pages/PatientPage/States/PatientReducer';
import authenticationReducer from '../Pages/Authentication/States/AuthReducer';

const rootReducer = combineReducers({
  adminPage: adminReducer,
  patientDashboardPage: patientDashboardReducer,
  authenticationPage: authenticationReducer,
});

export default rootReducer;
