import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { makeStyles, List, ListItemAvatar, ListItemText, Avatar, ListItem, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {PatientNavigationBar} from './PatientNavigation';
import { SearchBar } from '../../CommonComponents/SearchBar';
import * as actions from './States/PatientActions';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyItems: 'center',
      margin: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.default,
    },
    listItem: {
        width: "90vw",
    }
  }));

const DoctorList = ({doctor}) => {
    const classes = useStyles();
    return(
        <div>
            <List className={classes.root}>
                <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                        <Avatar>{doctor.username.charAt(0).toUpperCase()}</Avatar>
                    </ListItemAvatar>
                    <ListItemText>{doctor.username}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="settings">
                            <MenuIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
        
    );
};

const PatientDashboardPage = ({ dispatch, doctorsList}) => {
    useEffect(() => {
        dispatch(actions.getAvailableDoctors());
    }, [dispatch]);
  
    const renderDoctorsList = () => {
        return doctorsList.map(doctor => <DoctorList key={doctor.id} doctor={doctor}/>);
    };
           
    return(
        <div>
            <PatientNavigationBar/>
            <SearchBar/>
            {renderDoctorsList()}
        </div>
    );
};

const mapStateToProps = state => ({
    doctorsList: state.patientDashboardPage.doctorsList,
  });

export default connect(mapStateToProps)(PatientDashboardPage);