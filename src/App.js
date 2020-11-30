import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


import LoginPage from './Pages/Authentication/LoginPage';
import RegisterPage from './Pages/Authentication/RegisterPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import PatientDashboard from './Pages/PatientPage/PatientDashboardPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/patientDashboard" component={PatientDashboard} />
        <Route exact path="/adminPage" component={AdminPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
