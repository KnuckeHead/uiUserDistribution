import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import * as actions from './State/AdminActions';

import { UserCard } from './Components/UserCard';
import {NavigationBar} from '../../CommonComponents/AppBar/AppBar';

const AdminPage = ({ dispatch, usersList }) => {
    useEffect(() => {
      dispatch(actions.getAllUsers());
  }, [dispatch]);

  const renderUsers = () => {
    return usersList.map(user => <UserCard key={user.userID} user={user} />);
  };

  return (
    <section>
    <NavigationBar/>
      {renderUsers()}
    </section>
  );
};

const mapStateToProps = state => ({
  usersList: state.adminPage.usersList,
});


export default connect(mapStateToProps)(AdminPage);
