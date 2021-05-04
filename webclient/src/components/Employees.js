import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import NavBar from '../utils/NavBar';
import CancelIcon from '@material-ui/icons/Cancel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import  { connect } from 'react-redux';
import { fetchEmployees } from '../actions/employeeAction';

const useStyles = makeStyles((theme) => ({
    gridList: {
        width: "100%",
        height: "100%",
    },
    avatar: {
        backgroundColor: red[500],
    },
    root: {
        minWidth: 250,
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

function Employees(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ display: 'flex' }}>
            <NavBar />
            <div style={{ width: '100' }}>
                <GridList cols={3}>
                    {props.employees.employeeReducer.map((tile) => (
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

const mapState = state => ({
    employees: state
})

const mapDispatch = dispatch => {
    dispatch(fetchEmployees())
    return {};
}

export default connect(mapState, mapDispatch)(Employees);