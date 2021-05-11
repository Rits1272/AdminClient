import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import NavBar from '../utils/NavBar';
import  { connect } from 'react-redux';
import { fetchEmployees } from '../actions/employeeAction';
import { Redirect } from 'react-router-dom';

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
    const { isAuthenticated } = props;
    
    if(!isAuthenticated){
        return <Redirect to='/login'/>
    }

    return (
        <div style={{ display: 'flex' }}>
            <NavBar />
            <div style={{ width: '100%', overflow: 'hidden'}}>
                <GridList cols={3} style={{ paddingBottom: 50 }}>
                    {props.employees.employeeReducer.map((tile) => (
                        <Card className={classes.root} elevation={2}>
                            <CardHeader
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
        </div>
    );
}

const mapState = state => ({
    employees: state,
    isAuthenticated: state.loginReducer.isAuthenticated,
})

const mapDispatch = dispatch => {
    dispatch(fetchEmployees())
    return {};
}

export default connect(mapState, mapDispatch)(Employees);