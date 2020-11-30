import {Dialog,  DialogContent, DialogActions, Button , TextField, DialogTitle } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const EditUserDialog = (props) => {   
  const { onClose, open, user } = props;

  const handleClose = () => {
    onClose();
  };
  
  const [userState , setUserState] = useState(user);
   useEffect(() => { setUserState(user); }, [user]);
  
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth>
      <DialogTitle id="simple-dialog-title">
        Edit User
      </DialogTitle>
      <DialogContent>
        <TextField
        autoFocus
        InputLabelProps={{ shrink: true }}
        margin="dense"
        id="filled-disabled"
        label="Name"
        type="text"
        value={userState.name}
        onChange={event => setUserState(event.target.value)}
        fullWidth
        />
        <TextField
        InputLabelProps={{ shrink: true }}
        autoFocus
        margin="dense"
        id="filled-disabled"
        label="Age"
        type="text"
        value={userState.age}
        onChange={event => setUserState(event.target.value)}
        fullWidth
        />
      </DialogContent>
      <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  user: state.adminPage.user,
});


export default connect(mapStateToProps)(EditUserDialog);