import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from '../utils/NavBar';
import Alert from '@material-ui/lab/Alert';
import characterThree from '../utils/Images/characterThree.png';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { getInspector, AddNewDrawing } from '../actions/addDrawingAction';
import { Redirect } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Gatisheel © '}
            <Link href = '/privacy' color="inherit">
                Gatisheel
      </Link> 
            {' '}{new Date().getFullYear()}
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
    },
}));


function AddDrawing(props) {
    const classes = useStyles();
    const [drawing, setDrawing] = useState("");
    const [inspector, setInspector] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("Pending");
    const [msg, setMsg] = useState("");
    const [type, setType] = useState("");
    const { inspectors, dispatch, success, isAuthenticated, role } = props;

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
        else if (type === "quantity") {
            setQuantity(val);
        }
    }

    useEffect(() => {
        dispatch(getInspector());
    }, []);

    const saveDetails = (e) => {
        e.preventDefault();

        if(drawing === "" || inspector === "" || quantity === ""){
            setMsg("Please enter valid details");
            setType("error");
            return;
        }

        dispatch(AddNewDrawing(drawing, inspector, inspectors[inspector], quantity)); // saves drawing to database

        setTimeout(() => {
            if(success){
                setDrawing("");
                setQuantity("");
                setInspector("");
     
                setMsg("Drawing number added successfully");
                setType("success");
            }
            else{
                setMsg("Please enter correct details");
                setType("error");
            }
        }, 1000);
    
    }
    
    // Disappearing message after 5 seconds
    const disappear = () => {
        setTimeout(() => {
            if(msg !== ""){
                setMsg("");
            }
        }, 5000);
    }

    disappear();

    if(!isAuthenticated){
        return <Redirect to = "/login"/>
    }

    if(role !== "admin"){
        return <Redirect to = "/notAllowed"/>
    }

    return (
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar />
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
            <img src = {characterThree} class={classes.imgStyle}/>

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
                        <FormControl variant="outlined" margin="normal" fullWidth>
                                <InputLabel id="demo-simple-select-outlined-label" margin="normal">Inspector</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select-outlined"
                                    value={inspector}
                                    label="Inspector"
                                    fullWidth
                                    onChange={e => setValue(e, "inspector")}
                                >
                                    {Object.keys(inspectors).map(key => {
                                        return (
                                            <MenuItem value={key}>{key}</MenuItem>
                                        )
                                    })}
                                </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            value={quantity}
                            fullWidth
                            label="Quantity"
                            type="string"
                            onChange={(e) => setValue(e, "quantity")}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            color="secondary"
                            variant="contained"
                            className={classes.submit}
                            onClick={e => saveDetails(e)}
                        >Save</Button>
                    </form>
                </div>
                <Box mt={6}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}

const mapState = state => ({
    inspectors: state.drawingReducer.inspector,
    success: state.drawingReducer.success,
    isAuthenticated: state.loginReducer.isAuthenticated,
    role: state.loginReducer.role,
});

export default connect(mapState)(AddDrawing);   