import { all } from "redux-saga/effects";
import { AdminEffects } from '../Pages/AdminPage/State/AdminEffects';
import { PatientDashboardEffects } from '../Pages/PatientPage/States/PatientEffects';
import { UserAuthenticationEffects } from '../Pages/Authentication/States/AuthEffects';

export default function* rootEffects() {
    yield all([AdminEffects(), UserAuthenticationEffects(), PatientDashboardEffects()]);
}