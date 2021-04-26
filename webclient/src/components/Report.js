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
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AssesmentIcon from '@material-ui/icons/Assessment';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import citylandscape from '../utils/Images/citylandscape.png';
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
  },
  formControl: {
    margin: 30,
    minWidth: 120,
  },
  inputDiv: {
    marginTop: 60,
    textAlign: 'center'
  },
  submit: {
    marginTop: 10,
  }
});

export default function Report() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [year, setYear] = useState("2021");
  const [month, setMonth] = useState(1);

  const fetchDetails = () => {
    const ref = firebase.database().ref();

    const itemref = ref.child(`report/${year}/${month}`);

    let tmp = [];

    itemref.on("value", snap => {
      let Data = snap.val();
      if(Data !== null){
        Object.keys(Data).map(key => {
          let res = Data[key];
          let obj = { 'date': res['date'], 'inspector': res['inspector'], 'drawing': res['drawing'], quantity: res['quantity'], accepted: res['accepted'], rejected: res['rejected'] };
          tmp.push(obj);
        })
        setRows(tmp)
      }
      else{
        setRows([])
      }
    })
  }

  const handleChange = (e, type) => {
    const val = e.target.value;
    if (type === "month") {
      setMonth(val);
    }
    else if (type === "year") {
      setYear(val);
    }
  }

  const exportPDF = () => { 
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);
    const title = `${month}-${year} report`;
    const headers = [["Date", "Drawing Number", "Inspector", "Quantity", "Accepted", "Rejected"]];

    const data = rows.map(res => [res.date, res.drawing, res.inspector, res.quantity, res.accepted, res.rejected]);

    let content = {
    startY: 50,
    head: headers,
    body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`${month}_${year}_report.pdf`)
}

  useEffect(() => {
    // fetch firebase date from here
    fetchDetails();
  }, [])

  return (
    <div style={{ display: 'flex'}}>
      <NavBar />
      <div style={{width: "100%", marginRight: 20}}>
        <div class={classes.inputDiv}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              onChange={e => handleChange(e, "year")}
            >
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2018}>2018</MenuItem>
              <MenuItem value={2017}>2017</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={month}
              onChange={e => handleChange(e, "month")}
            >
              <MenuItem value={1}>January</MenuItem>
              <MenuItem value={2}>February</MenuItem>
              <MenuItem value={3}>March</MenuItem>
              <MenuItem value={4}>April</MenuItem>
              <MenuItem value={5}>May</MenuItem>
              <MenuItem value={6}>June</MenuItem>
              <MenuItem value={7}>July</MenuItem>
              <MenuItem value={8}>August</MenuItem>
              <MenuItem value={9}>September</MenuItem>
              <MenuItem value={10}>October</MenuItem>
              <MenuItem value={11}>November</MenuItem>
              <MenuItem value={12}>December</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button
              type="submit"
              fullWidth
              color="secondary"
              variant="outlined"
              className={classes.submit}
              onClick = {(e) => fetchDetails(e)}
            >Search</Button>
          </FormControl>
        </div>
        {rows.length === 0 ? <div style={{width: '100%', textAlign: 'center', marginTop: 100}}>
                <img src={citylandscape}/>
                <Typography color="secondary">No report found!</Typography>
            </div> 
            : 
          <div>
        <div style={{textAlign: 'center'}}>
        <Button
              type="submit"
              color="secondary"
              variant="outlined"
              onClick={() => exportPDF()}
              className={classes.submit}
              style={{minWidth: 200}}
              startIcon={<SaveAltIcon/>}
            >Export PDF</Button>
        </div>
      <div>
      <TableContainer component={Paper} style={{ margin: 10, marginTop: 20, elevation: 3, marginTop: 30 }} maxWidth="xl">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: '#FE6B8B' }}>
              <TableCell align="right" className={classes.heading}><DateRangeIcon className={classes.iconStyle} />Date</TableCell>
              <TableCell align="right" className={classes.heading}><AssesmentIcon className={classes.iconStyle} />Drawing Number</TableCell>
              <TableCell align="right" className={classes.heading}><AccountCircleRoundedIcon className={classes.iconStyle} />Inspector</TableCell>
              <TableCell align="right" className={classes.heading}><FitnessCenterRoundedIcon className={classes.iconStyle} />Quantity</TableCell>
              <TableCell align="right" className={classes.heading}><BarChartRoundedIcon className={classes.iconStyle} />Accepted</TableCell>
              <TableCell align="right" className={classes.heading}><BarChartRoundedIcon className={classes.iconStyle} />Rejected</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.drawing}>
                <TableCell className={classes.data} align="right">{row.date}</TableCell>
                <TableCell className={classes.data} align="right">{row.drawing}</TableCell>
                <TableCell className={classes.data} align="right">{row.inspector}</TableCell>
                <TableCell className={classes.data} align="right">{row.quantity}</TableCell>
                <TableCell className={classes.data} align="right">{row.accepted}</TableCell>
                <TableCell className={classes.data} align="right">{row.rejected}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
}
    </div>
    </div>
  );
}
