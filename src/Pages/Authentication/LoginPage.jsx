import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, makeStyles, Typography, Container, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();

  const [user, setUser] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(usr => ({ ...usr, [name]: value }));
  };
  
  const navigateToPatientPage = () => history.push('/patientDashboard');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            autoFocus
            value={user.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!(user.username && user.password)}
            onClick={navigateToPatientPage}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                No account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}