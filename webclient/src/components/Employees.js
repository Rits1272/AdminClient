import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import firebase from '../Firebase';
import NavBar from '../utils/NavBar';
import CancelIcon from '@material-ui/icons/Cancel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    gridList: {
        width: "100%",
        height: "100%",
    },
    avatar: {
        backgroundColor: red[500],
    },
    root: {
        minWidth: 150,
        marginTop: 80,
        maxWidth: 475,
        marginRight: 50,
        marginLeft: 20,
        height: 'auto'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function Employees() {
    const classes = useStyles();

    const [inspector, setInspector] = useState([]);
    const [custodian, setCustodian] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [users, setUsers] = useState([]);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const fetchUsers = () => {
        const ref = firebase.database().ref();

        let tmp = [];

        // fetch inspectors
        const inspectorRef = ref.child('inspector');
        inspectorRef.once("value", snap => {
            const data = snap.val();
            Object.keys(data).map(key => {
                let res = data[key];
                tmp.push({ 'name': res['name'], 'email': res['reg_id'], 'contact': res['phn'], 'role': 'Inspector' });
            });
            setInspector(tmp);
        })

        // fetch custodians
        const custodianRef = ref.child('custodian');
        custodianRef.once("value", snap => {
            const data = snap.val();
            Object.keys(data).map(key => {
                let res = data[key];
                tmp.push({ 'name': res['name'], 'email': res['reg_id'], 'contact': res['phn'], 'role': 'Custodian' });
            });
            setCustodian(tmp);
        })

        // fetch admins
        const adminRef = ref.child('admin');
        adminRef.once("value", snap => {
            const data = snap.val();
            Object.keys(data).map(key => {
                let res = data[key];
                tmp.push({ 'name': res['name'], 'email': res['reg_id'], 'contact': res['phn'], 'role': 'Admin' });
            });
            setAdmin(tmp);
        })

        setUsers(tmp);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    console.log(inspector)
    return (
        <div style={{ display: 'flex' }}>
            <NavBar />
            <div style={{ width: '100' }}>
                <GridList cols={3}>
                    {users.map((tile) => (
                        <Card className={classes.root}>
                            <CardHeader
                                action={
                                    <div>
                                        <IconButton aria-label="settings" onClick={handleClickOpen}>
                                            <CancelIcon style={{ color: 'red' }} />
                                        </IconButton>
                                    </div>
                                }
                                title={tile.name}
                                subheader={tile.role}
                            />

                            <CardContent>
                                <Typography className={classes.title} gutterBottom>
                                    Email: {tile.email}
                                </Typography>
                                <Typography className={classes.title} gutterBottom>
                                    Phone: {tile.contact}
                                </Typography>
                            </CardContent>

                        </Card>
                    ))}

                </GridList>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Are you sure you want to delete the user?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
          </Button>
                    <Button onClick={handleClose} color="secondary" autoFocus>
                        Agree
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}