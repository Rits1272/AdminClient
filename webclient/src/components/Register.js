import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import NavBar from '../utils/NavBar';

// Firebase imports
import firebase from '../Firebase';

var generator = require('generate-password');

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
        marginTop: theme.spacing(8),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: 10,
    },
    errorMsg: {
        color: 'red',
        fontSize: '14px',
        marginTop: '20px',
    }
}));


export default function Login() {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    const validEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const disappear = () => {
        if (msg !== "") {
            setTimeout(() => setMsg(""), "");
        }
    }

    const setValue = (e, type) => {
        e.preventDefault();
        const val = e.target.value;
        if (type === "email") {
            setEmail(val);
        }
        else if (type === "contact") {
            setContact(val);
        }
        else if (type === "name") {
            setName(val);
        }
        else if (type === "role") {
            setRole(val);
        }
    }

    const registerUser = () => {
        // Generating a random password for the new user to be registered
        var pass = generator.generate({
            length: 8,
            numbers: true,
        })

        // A quick validation for the inputs provided by the admin
        if (name === "" || contact === "" || role === "" || !validEmail(email) || pass === "") {
            setMsg("Please enter valid details!");
            return;
        }

        try {
            // Register the new user
            firebase.auth().createUserWithEmailAndPassword(email, pass);

            // send the mail to the user to reset the password
            firebase.auth().sendPasswordResetEmail(email);
        }
        catch (err) {
            setMsg("Something went wrong!")
            console.log("Error while registration of the users", err);
        }
    }

    disappear();

    return (
        <div style={{display: 'flex'}}>
                <CssBaseline />
            <NavBar />
        <Container component="main" maxWidth="xs">
        
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" style={{marginTop: 10}}>
                    Add New Role
        </Typography>
                <Typography component="h1" variant="h6" className={classes.errorMsg}>
                    {error}
                </Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Name"
                        autoFocus
                        onChange={(e) => setValue(e, "name")}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        onChange={(e) => setValue(e, "email")}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Contact"
                        type="number"
                        onChange={(e) => setValue(e, "contact")}
                    />
                    <FormControl variant="outlined" fullWidth margin="normal">
                        <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={role}
                            onChange={e => setValue(e, "role")}
                            label="Role"
                            fullWidth
                        >
                            <MenuItem value={"Admin"}>Admin</MenuItem>
                            <MenuItem value={"Inspector"}>Inspector</MenuItem>
                            <MenuItem value={"Custodian"}>Custodian</MenuItem>
                            <MenuItem value={"Viewer"}>Viewer</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={e => registerUser(e)}
                    >
                        Register
          </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
        </div>
    );
}