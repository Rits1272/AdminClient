import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import NavBar from '../utils/NavBar';
import characterOne from '../utils/Images/characterOne.png';
import Alert from '@material-ui/lab/Alert';
import {useHistory} from 'react-router-dom';


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
        padding: 7,
        fontSize: 17,
    },
    errorMsg: {
        color: 'red',
        fontSize: '14px',
        marginTop: '20px',
    }
}));


export default function Register() {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState("");

    const [msg, setMsg] = useState("");
    const [type, setType] = useState("success");
    const history = useHistory();

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user){
            if(!user){
                history.push('/login')
            }
        })
    }, []);

    const validEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const disappear = () => {
        if (msg !== "") {
            setTimeout(() => setMsg(""), 5000);
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

    const registerUser = (e) => {
        e.preventDefault();

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
            // Register the user
            firebase.auth().createUserWithEmailAndPassword(email, pass);

            setTimeout(() => {
                firebase.auth().sendPasswordResetEmail(email);
                console.log("Reset Mail send successfully!")
            }, 2000);

            // send the mail to the user to reset the password
            firebase.auth().sendPasswordResetEmail(email);
            console.log("Reset mail sent!")

            // Add metadata of the user
            const EMAIL = email.replace('.', ',');
            const ROLE = role.toLowerCase();

            const ref = firebase.database().ref();
            const userRef = ref.child(`${ROLE}/${EMAIL}/`);

            userRef.set({
                email: email,
                role: role,
                contact: contact,
                name: name,
            });
            console.log("Meta data added successfully!")
            setName("");
            setContact("");
            setRole("");
            setEmail("");

            setMsg("Employee registered successfully!")
            setType("success")
        }
        catch (err) {
            setMsg("Something went wrong. Please make sure that fields are valid and email is unique")
            setType("error")
            console.log("Error registering the user", err);
            return;
        }
    }

    disappear();

    return (
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar />
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <img src={characterOne} />
                    <Typography component="h1" variant="h5" style={{ marginTop: 10 }}>
                        Add New Role
                    </Typography>
                    {
                        msg !== "" && <Alert severity={type}>{msg}</Alert>
                    }
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Name"
                            autoFocus
                            value = {name}
                            onChange={(e) => setValue(e, "name")}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value = {email}
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
                            value = {contact}
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
                            color="secondary"
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