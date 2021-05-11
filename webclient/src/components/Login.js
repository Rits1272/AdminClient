import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar2 from '../utils/NavBar2';
import CharacterTwo from '../utils/Images/CharacterTwo.png';
import Alert from '@material-ui/lab/Alert';
import { Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import { loginUser, userRole } from '../actions/loginAction';
import { CircularProgress } from 'material-ui';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href = '/privacy' color="inherit">
        Gatisheel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: 7,
    fontSize: 17,
  },
  errorMsg: {
    color: 'red',
    fontSize: '14px',
    marginTop: '20px',
  }
}));


function Login (props) {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState("");
  const { loginError, isAuthenticated, dispatch, role, loading } = props;

  const setValue = (e, type) => {
    e.preventDefault();
    if (type === "email") {
      setEmail(e.target.value);
    }
    else if (type === "password") {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));

    setTimeout(() => {
      if(loginError){
        setMsg("Incorrect email or password");
      }
    }, 1000);
  } 

  if(isAuthenticated && role !== ""){
    return <Redirect to="/" />;
  }

  if(isAuthenticated){
    dispatch(userRole(email));
  }

  return (
    <div style={{ display: 'flex' }}>
      <NavBar2 />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={CharacterTwo} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {
            msg !== "" && <Alert style={{marginTop: 20}} severity={"error"}>{msg}</Alert>
          }
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setValue(e, "email")}
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
              autoComplete="current-password"
              onChange={(e) => setValue(e, "password")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={e => handleSubmit(e)}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item>
                <Link href="/reset" variant="body2" color="secondary">
                  {"Reset Password?"}
                </Link>
              </Grid>
            </Grid>
          </form>
          {loading && <CircularProgress color="secondary"/>}
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

const mapState = state => {
  return {
    isLogginIn: state.loginReducer.isLogginIn,
    loginError: state.loginReducer.loginError,
    isAuthenticated: state.loginReducer.isAuthenticated,
    role: state.loginReducer.role,
    loading: state.loginReducer.isLogginIn,
  };
}

export default connect(mapState)(Login);