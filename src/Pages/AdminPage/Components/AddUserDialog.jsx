import {Dialog,  DialogContent, DialogActions, Button , TextField, DialogTitle } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../State/AdminActions';


const AddUserDialog = (props) => {   
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  
  const handleClick = () => {
    props.dispatch(actions.addUser());
    onClose();
  };
  
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth>
      <DialogTitle id="simple-dialog-title">
        Add User
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="filled-disabled"
          label="Name"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="filled-disabled"
          label="Age"
          type="number"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
          <Button variant="outlined" onClick={handleClick} color="primary">
            Save
          </Button>
        </DialogActions>
    </Dialog>
  );
};


export default connect()(AddUserDialog);