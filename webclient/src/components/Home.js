import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavBar from '../utils/NavBar';
import firebase from '../Firebase';
import "firebase/database";
import Chip from '@material-ui/core/Chip';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AssesmentIcon from '@material-ui/icons/Assessment';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import landscape from '../utils/Images/landscape.png';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    data: {
        fontSize: 17,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    iconStyle: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        marginRight: 8,
    }
});

export default function Home() {
    const classes = useStyles();

    const [rows, setRows] = useState([]);

    const fetchDetails = () => {
        const ref = firebase.database().ref();
        const itemref = ref.child('item');

        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString('default', {month: 'short'});
        const year = today.getFullYear();

        const queryDate = `${day}-${month}-${year}`;
        
        itemref.on("value", snap => {
            let Data = snap.val();
            let tmp = [];
            Object.keys(Data).map(key => {
                let res = Data[key];
                if(res['date'] === queryDate){
                    let obj = { 'date': res['date'], 'inspector': res['inspector_name'], 'drawing': res['drawing_no'], quantity: res['quantity'], status: res['status'] };
                    tmp.push(obj);
                }
            })
            setRows(tmp)
        })
    }

    useEffect(() => {
        // fetch firebase date from here
        fetchDetails();
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <NavBar />
            {rows.length === 0 ? <div style={{width: '100%', textAlign: 'center', marginTop: 100}}>
                <img src={landscape}/>
                <Typography color="secondary" >Oopsie! No record found</Typography>
            </div> 
            : 
            <TableContainer component={Paper} style={{ margin: 10, marginTop: 80, elevation: 3 }} maxWidth="xl">
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor: '#FE6B8B'}}>
                            <TableCell align="right" className={classes.heading}><DateRangeIcon className={classes.iconStyle}/>Date</TableCell>
                            <TableCell align="right" className={classes.heading}><AssesmentIcon className={classes.iconStyle}/>Drawing Number</TableCell>
                            <TableCell align="right" className={classes.heading}><AccountCircleRoundedIcon className={classes.iconStyle}/>Inspector</TableCell>
                            <TableCell align="right" className={classes.heading}><FitnessCenterRoundedIcon className={classes.iconStyle}/>Quantity</TableCell>
                            <TableCell align="right" className={classes.heading}><BarChartRoundedIcon className={classes.iconStyle}/>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.drawing}>
                                <TableCell className={classes.data} align="right">{row.date}</TableCell>
                                <TableCell className={classes.data} align="right">{row.drawing}</TableCell>
                                <TableCell className={classes.data} align="right">{row.inspector}</TableCell>
                                <TableCell className={classes.data} align="right">{row.quantity}</TableCell>

                                {row.status === "ACCEPTED" && <TableCell align="right" style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>   <Chip
                                    icon={<CheckCircleOutlineIcon style={{color: 'white'}} />}
                                    label="ACCEPTED"
                                    style={{backgroundColor: '#32CD32', color: 'white'}}
                                /></TableCell>}
                                {row.status === "REJECTED" && <TableCell align="right" style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>   <Chip
                                    icon={<CancelOutlinedIcon style={{color: 'white'}} />}
                                    label="REJECTED"
                                    color="secondary"
                                    style={{backgroundColor: '#DC143C', color: 'white', minWidth: 120}}
                                /></TableCell>}          {row.status === "PENDING" && <TableCell align="right" style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>   <Chip
                                    icon={<HourglassEmptyOutlinedIcon style={{color: 'white'}} />}
                                    label="PENDING"
                                    color="grey"
                                    style={{backgroundColor: '#a9a9a9', color: 'white', minWidth: 120}}
                                /></TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>    
                </Table>
            </TableContainer>
            }
        </div>
    );
}
