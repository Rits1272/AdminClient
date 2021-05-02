import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../utils/NavBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import characterSix from '../utils/Images/characterSix.png';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import firebase from '../Firebase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Alert from '@material-ui/lab/Alert';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles({
    formControl: {
        margin: 30,
        minWidth: 120,
    },
    inputDiv: {
        marginTop: 60,
        textAlign: 'center',
        width: "100%",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        
    },
    paper: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formControl: {
        margin: 30,
        minWidth: 120,
    },
    submit: {
        marginTop: 30,
        padding: 7,
        fontSize: 17,
    },
    root: {
        '& > *': {
            margin: 5,
        },
    },
    extendedIcon: {
        marginRight: 5,
    },
    addBtn: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    }
});

export default function Inventory() {
    const classes = useStyles();
    const [data, setData] = useState({});
    const [parameters, setParameters] = useState({});
    const [material, setMaterial] = useState([]);
    const [activeMaterial, setActiveMaterial] = useState("");
    const [open, setOpen] = React.useState(false);
    const [newMaterial, setNewMaterial] = useState([{ parameter: '', value: 'null' }]);
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const [type, setType] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddFields = () => {
        const values = [...newMaterial];
        values.push({ parameter: '', value: 'null' });
        setNewMaterial(values);
    }

    const handleRemoveFields = index => {
        const values = [...newMaterial];
       if(values.length === 1){
           return;
       }
        values.splice(index, 1);
        setNewMaterial(values);
    }

    const handleInputChange = (index, event) => {
        const values = [...newMaterial];
        values[index]['parameter'] = event.target.value;
        setNewMaterial(values);
    }

    const saveParameters = () => {
        if(name === ""){
            setMsg("Please enter valid material name");
            setType("error");
            return;
        }
        const obj = {};
        newMaterial.map((item, index) => {
            obj[item.parameter] = item.value;
        });
        try{
            const ref = firebase.database().ref();
            // ref.child(`inventory/${name}`).set(obj);
            setMsg("Material added to inventory successfully!")
            setType("success");
        }
        catch(err){
            setType("error");
            setMsg("Something went wrong. Please check if all the details are valid!")
        }
        finally{
            handleClose();
        }
    }

    const disappear = () => {
        if(msg !== ""){
            setTimeout(() => setMsg(""), 5000);
        }
    }

    useEffect(() => {
        const ref = firebase.database().ref();
        const inventoryRef = ref.child('inventory');

        inventoryRef.once("value", snap => {
            let Data = snap.val();
            let params = {};
            let tmp = {};
            let tmpMaterial = [];
            Object.keys(Data).map(key => {
                let t = [];
                Object.keys(Data[key]).map(k => {
                    t.push(k);
                })
                params[key] = t;
                tmpMaterial.push(key);
                tmp[key] = params;
            })
            setData(tmp);
            setMaterial(tmpMaterial);
            setParameters(params);
        })
    }, []);

    disappear();

    return (
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar />
            <Fab className={classes.addBtn} color="secondary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" style={{ minWidth: 500 }}>Add Material</DialogTitle>
                {
                         msg !== "" ? <Alert severity={type}>{msg}</Alert> : <div></div>
                }
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="normal"
                        variant="outlined"
                        id="name"
                        label="Material"
                        value={name}
                        fullWidth
                        onChange={e => setName(e.target.value)}
                    />
                    {newMaterial.map((field, index) => {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    label="Parameter"
                                    value={newMaterial[index].parameter}
                                    fullWidth
                                    onChange={e => handleInputChange(index, e)}
                                    style={{ marginRight: 10 }}
                                />
                                <Button onClick={() => handleAddFields()} margin="dense" raised color="primary" variant="outlined" color="secondary" style={{ marginTop: 15, marginBottom: 10, marginRight: 5, fontSize: 20 }}>
                                    +
                                </Button>
                                <Button onClick={() => handleRemoveFields(index)} color="primary" variant="outlined" color="secondary" style={{ marginTop: 15, marginBottom: 10, fontSize: 25 }}>
                                    -
                                </Button>
                            </div>
                        )
                    })}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={saveParameters} color="secondary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
            <div className={classes.inputDiv}>
                <Container component="main" maxWidth="xs">
                    <div className={classes.paper}>
                        <img src={characterSix} class={classes.imgStyle} />
                        <Typography component="h1" variant="h5" style={{ marginTop: 10 }}>
                            Inventory
                        </Typography>
                        {
                         msg !== "" ? <Alert severity={type}>{msg}</Alert> : <div></div>
                        }
                        <form className={classes.form} style={{marginTop: 25}}>
                            <FormControl variant="outlined" margin="normal" fullWidth>
                                <InputLabel id="demo-simple-select-outlined-label" margin="normal">Select Material</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select-outlined"
                                    value={activeMaterial}
                                    label="Select Material"
                                    fullWidth
                                    onChange={e => setActiveMaterial(e.target.value)}
                                >
                                    {material.map(item => {
                                        return (
                                            <MenuItem value={item}>{item}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                            {activeMaterial !== "" &&
                                parameters[activeMaterial].map((item, index) => {
                                    return (
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            // value={drawing}
                                            fullWidth
                                            label={item}
                                            autoFocus
                                        // onChange={(e) => setValue(e, "drawing")}
                                        />
                                    )
                                })
                            }
                            {activeMaterial !== "" &&
                                <Button
                                    type="submit"
                                    fullWidth
                                    color="secondary"
                                    variant="contained"
                                    className={classes.submit}
                                //  onClick={(e) => fetchDetails(e)}
                                >Submit</Button>}
                        </form>
                    </div>
                </Container>

            </div>
        </div>
    )
}