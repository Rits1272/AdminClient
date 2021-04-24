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
import NavBar from '../utils/NavBar';
import { format } from 'date-fns';
import Alert from '@material-ui/lab/Alert';

// Firebase imports
import firebase from '../Firebase';
import "firebase/database";

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


export default function AddDrawing() {
    const classes = useStyles();

    const [drawing, setDrawing] = useState("");
    const [inspector, setInspector] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("Pending");
    const [contact, setContact] = useState("");
    const [description, setDescription] = useState("");

    const [msg, setMsg] = useState("");
    const [type, setType] = useState("");

    const setValue = (e, type) => {
        e.preventDefault();
        const val = e.target.value;
        if (type === "drawing") {
            setDrawing(val);
        }
        else if (type === "inspector") {
            setInspector(val);
        }
        else if (type === "status") {
            setStatus(val);
        }
        else if (type === "contact") {
            setContact(val);
        }
        else if (type === "quantity") {
            setQuantity(val);
        }
        else if (type === "description") {
            setDescription(val);
        }
    }

    const saveDetails = (e) => {
        e.preventDefault();
        const ref = firebase.database().ref();
        let date = format(new Date(), 'dd-MM-yyyy');
        const itemref = ref.child(`item/${drawing}`);

        try {
            itemref.set({
                date: date,
                drawing_no: drawing,
                inspector_name: inspector,
                quantity: quantity,
                status: status,
                description: description,
            });

            setType("success");
            setMsg("Drawing Number Added Successfully!")

            setTimeout(() => {
                setType("");
                setMsg("");
            }, 5000);

            setDrawing("");
            setContact("");
            setQuantity("");
            setDescription("");
            setInspector("");
            console.log("Drawing Number added successfully!")
        }
        catch (err) {
            setType("error");
            setMsg("Something went wrong!")
            console.log("Error saving drawing number", err);
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar />
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ marginTop: 10 }}>
                        Add Drawing
                    </Typography>
                    {
                        msg !== "" ? <Alert severity={type}>{msg}</Alert> : <div></div>
                    }
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            value={drawing}
                            fullWidth
                            label="Drawing Number"
                            autoFocus
                            onChange={(e) => setValue(e, "drawing")}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={inspector}
                            label="Inspector Name"
                            onChange={(e) => setValue(e, "inspector")}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={contact}
                            label="Contact"
                            type="string"
                            onChange={(e) => setValue(e, "contact")}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            value={quantity}
                            fullWidth
                            label="Quantity"
                            type="number"
                            onChange={(e) => setValue(e, "quantity")}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Brief Description"
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            value={description}
                            rows={3}
                            variant="outlined"
                            onChange={(e) => setValue(e, "description")}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={e => saveDetails(e)}
                        >Save</Button>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}