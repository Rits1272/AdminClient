import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import NavBar2 from '../utils/NavBar2';
import CharacterTwo from '../utils/Images/CharacterTwo.png';
import Alert from '@material-ui/lab/Alert';

// Firebase imports
import firebase from '../Firebase';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Documentive
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


export default function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState("");
  const history = useHistory();


  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        history.push("/");
      }
    })
  }, []);

  const loginUser = (e) => {
    e.preventDefault();
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      // TODO : Get the role of the user from here using the mail if successfull log in

      history.push("/");
      })
    }
    catch (err) {
      setMsg("Either email or password is incorrect!")
      console.log("Error loggin in user", err);
    }
  }

  const setValue = (e, type) => {
    e.preventDefault();
    if (type === "email") {
      setEmail(e.target.value);
    }
    else if (type === "password") {
      setPassword(e.target.value);
    }
  }

  const navigateToReset = (e) => {
    console.log("PUSHED")
    e.preventDefault();
    history.push("/reset");
  }

  const disappear = () => {
    if (msg !== "") {
      setTimeout(() => setMsg(""), 5000);
    }
  }

  disappear();

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
            msg !== "" && <Alert severity={"error"}>{msg}</Alert>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={e => loginUser(e)}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item>
                <Link href="/reset" variant="body2" color="secondary" onClick={e => navigateToReset(e)}>
                  {"Reset Password?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}