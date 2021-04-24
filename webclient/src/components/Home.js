import React, {useEffect, useState} from 'react';
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function Home() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const createData = (date, inspector, drawing, quantity, status) => {
      return {date, inspector, quantity, drawing, status};
  }

  const fetchDetails = () => {
      const ref = firebase.database().ref();
      const itemref = ref.child('item');

      let tmp = [];

      itemref.on("value", snap => {
        let Data = snap.val();
        Object.keys(Data).map(key => {
            let res = Data[key];
            let obj = {'date': res['date'], 'inspector': res['inspector_name'], 'drawing': res['drawing_no'], quantity: res['quantity'], status: res['status']};
            tmp.push(obj);
        })
        setRows(tmp)
      })
  }

  useEffect(() => {
    // fetch firebase date from here
    fetchDetails();
  }, [])

  console.log(rows)
  return (
      <div style={{display: 'flex'}}>
          <NavBar/>
    <TableContainer component={Paper} style={{margin: 10, marginTop: 80}} maxWidth="xl">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{fontSize: 18}}>Date</TableCell>
            <TableCell align="right" style={{fontSize: 18}}>Drawing Number</TableCell>
            <TableCell align="right" style={{fontSize: 18}}>Inspector&nbsp;</TableCell>
            <TableCell align="right" style={{fontSize: 18}}>Quantity&nbsp;</TableCell>
            <TableCell align="right" style={{fontSize: 18}}>Status&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.drawing}>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.drawing}</TableCell>
              <TableCell align="right">{row.inspector}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
  
              {row.status === "ACCEPTED" &&  <TableCell align="right" style={{color: 'green', fontWeight: 'bold', fontSize: 16}}>{row.status}</TableCell>}
              {row.status === "pending" &&  <TableCell align="right" style={{color: 'grey', fontWeight: 'bold', fontSize: 16}}>{row.status}</TableCell>}
              {row.status === "Rejected" &&  <TableCell align="right" style={{color: 'red', fontWeight: 'bold', fontSize: 16}}>{row.status}</TableCell>}

            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
