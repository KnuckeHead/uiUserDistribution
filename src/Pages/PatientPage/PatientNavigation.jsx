import React, {useState} from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, SwipeableDrawer, ListItem, Divider, ListItemText, List} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
  },
}));

export const PatientNavigationBar = () => {
  const classes = useStyles();
  
  const [state, setState] = useState({
    bottom: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('bottom', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Project Name
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer 
        anchor="bottom" 
        open={state.bottom} 
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}>
         <div>
          <List>
              <ListItem button><ListItemText primary="My Appointments"/></ListItem>
              <ListItem button><ListItemText primary="Appointment History"/></ListItem>
              <ListItem button><ListItemText primary="Available Doctors"/></ListItem>
              <ListItem button><ListItemText primary="Transaction History"/></ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button><ListItemText primary="Settings"/></ListItem>
              <ListItem button><ListItemText primary="My profile"/></ListItem>
              <ListItem button><ListItemText primary="Logout"/></ListItem>
            </List>
         </div>
      </SwipeableDrawer>
    </div>
  );
};
