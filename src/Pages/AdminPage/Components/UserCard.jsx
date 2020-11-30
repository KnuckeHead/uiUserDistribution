import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardContent, makeStyles, Typography, CardActions, IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { blueGrey } from '@material-ui/core/colors';
import EditUserDialog  from './EditUserDialog';
import * as actions from '../State/AdminActions';


const useStyles = makeStyles({
  root: {
    minWidth: 270,
    width: 'fit-content',
    display: 'inline-block',
    margin: "1rem",
    backgroundColor: blueGrey[50]

  },
  title: {
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

EditUserDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    dispatch(actions.setCurrentUserId(user.userID));
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2" color="textSecondary" gutterBottom>
          {user.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {user.age}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Edit User" onClick={handleClickOpen} >
            <Edit fontSize="small" />
            <EditUserDialog open={open} onClose={handleClose} />
        </IconButton>
        <IconButton aria-label="Delete User">
            <Delete />
        </IconButton>
      </CardActions>
  </Card>
  );
};
