import { useDispatch } from 'react-redux';
import React from 'react';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { CssBaseline, Avatar, Button, TextField, Grid, Link, Container, Typography, makeStyles, InputLabel, Select, MenuItem } from '@material-ui/core';

import * as actions from './States/AuthActions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  label: {
      fontSize: "0.8rem",
      paddingBottom: theme.spacing(0.8),
  },
  buttonText: {
    color: theme.palette.common.white
  }
}));

export default function RegisterPage() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const userTypeList = ["DOCTOR", "PATIENT"];

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
    userType: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(usr => ({ ...usr, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.RegisterUser(user));
  };


  const navigateToLoginPage = () => history.push('/');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                value={user.username}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={user.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
                <InputLabel className={classes.label}>User Type</InputLabel>
                <Select
                    required 
                    fullWidth 
                    name="userType" 
                    id="User type"
                    variant="outlined"
                    value={user.userType}
                    onChange={handleChange}>
                        {userTypeList.map(type => <MenuItem key={type} value={type}>{type}</MenuItem> )}
                </Select>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!(user.username && user.userType && user.email && user.password)}
            onClick={navigateToLoginPage}
          >
              <Typography className={classes.buttonText} variant="button">
                Sign Up
              </Typography>
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}