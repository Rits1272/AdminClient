import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import characterFive from '../utils/Images/characterFive.png';
import NavBar2 from '../utils/NavBar2';

// Firebase imports
import firebase from '../Firebase';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Hirmi Project
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: 7,
    fontSize: 17,
  },
  Msg: {
      color: '#ff0000',
      fontSize: '14px',
      marginTop: '20px',
  }
}));

export default function Reset() {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  const history = useHistory();

  const validEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const resetUser = (e) => {
      e.preventDefault();
      if(!validEmail(email)){
        setMsg("Please enter valid email address!");
        return;
      }
      try{
        firebase.auth().sendPasswordResetEmail(email);
        setMsg("Password link sent to email successfully!");
        setEmail("");
      }
      catch(err){
          setMsg("Please enter valid email address");
      }
  }

  const setValue = (e, type) => {
      e.preventDefault();
      if(type === "email"){
         setEmail(e.target.value);
      }
  }

  const navigate = (e, type) => {
      e.preventDefault();
      const path = "/" + type;
      history.push(path);
  }

  return (
    <div style={{display: 'flex'}}>
      <NavBar2/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={characterFive}/>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Typography component="h1" variant="h6" className={classes.Msg}>
            {msg}
        </Typography>
        <form className={classes.form} noValidate>
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
            onChange = {(e) => setValue(e, "email")}
          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={e => resetUser(e)}
            >
             Reset
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" onClick={(e) => navigate(e, "login")} color="secondary">
                {"Login?"}
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