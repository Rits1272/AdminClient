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

import { connect } from 'react-redux';
import { AddNewRole } from '../actions/addNewRoleAction';

var generator = require('generate-password');

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit">
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


function Register(props) {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const [type, setType] = useState("success");
    const { success, dispatch } = props;

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

        if(!validEmail(email)){
            setMsg("Please enter a valid email address");
            setType("error");
            return;
        }

        // Generating a random temporary password for the new user
        let password = generator.generate({
            length: 8,
            numbers: true,
        });

        dispatch(AddNewRole(name, email, password, contact, role));

        if(success){
            setName("");
            setContact("");
            setRole("");
            setEmail("");
            setMsg("Employee registered successfully!")
            setType("success")
        }
        else{
            setMsg("Some unknown error occurred");
            setType("error");
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
                                required
                                fullWidth
                            >
                                <MenuItem value={"admin"}>Admin</MenuItem>
                                <MenuItem value={"inspector"}>Inspector</MenuItem>
                                <MenuItem value={"custodian"}>Initiator</MenuItem>
                                <MenuItem value={"monitor"}>Monitor</MenuItem>
                                <MenuItem value={"Power user"}>Power User</MenuItem>
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

const mapState = state => {
    return {
        success: state.addNewRoleReducer.success,
    }
}

export default connect(mapState)(Register);