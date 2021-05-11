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
import Chart from "react-apexcharts";
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

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

function Report(props) {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(1);
  const [barDate, setBarDate] = useState([]);
  const [areacategories, setAreaCategories] = useState();
  const [acceptedDate, setAcceptedDate] = useState([]);
  const [rejectetDate, setrejectetDate] = useState([]);
  const [quantityDate, setQuantityDate] = useState([]);

  const { isAuthenticated, role } = props;

  const history = useHistory();

  var barSeries = [{
    name: "Quantity",
    data: quantityDate,
  }]

  var barOptions = {
    chart: {
      type: 'area',
      height:'auto',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Quantity incoming',
      align: 'center'
    },
    subtitle: {
      text: 'Quantity Movements',
      align: 'left'
    },
    labels: areacategories,
    yaxis: {
      opposite: false
    },
    legend: {
      horizontalAlign: 'left'
    },
    title: {
      text: 'Quantity incoming',
      align: 'center'
    },
    subtitle: {
      text: 'Quantity Movements',
      align: 'left'
    },
    colors: ['#ff0000']
  }

  var Areaseries = [{
    name: 'Accepted',
    data: acceptedDate,
  }, {
    name: 'Rejected',
    data: rejectetDate,
  }
];

  var Areaoptions = {
    chart: {
      height: 'auto',
      type: 'area',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'date',
      categories: areacategories,
    },
    title: {
      text: 'Status',
      align: 'center'
    },
    legend: {
      horizontalAlign: 'center'
    },
    colors: ['#00ff00', '#ff0000']
  };

  const fetchDetails = () => {
    const ref = firebase.database().ref();

    const itemref = ref.child(`report/${year}/${month}`);

    itemref.once("value", snap => {
      let Data = snap.val();
      let tmp = [];
      let acceptedData = {};
      let rejectedData = {};
      let quantityData = {};
      var dateSet = new Set();

      if (Data !== null) {
        Object.keys(Data).map(key => {
          let res = Data[key];
          let obj = { 'date': res['date'], 'inspector': res['inspector'], 'drawing': res['drawing'], 'quantity': res['quantity'], 'status': res['status'] };

          let q = res['quantity'];
          q = q.slice(0, q.length-2);
          q = parseInt(q);

          tmp.push(obj);
          dateSet.add(res['date']);
          
          if(quantityData[res['date']]){
            quantityData[res['date']] = quantityData[res['date']] + q;
          }
          else{
            quantityData[res['date']] = q;
          }

          if (obj['status'] === "ACCEPTED") {
            if(acceptedData[res['date']]){
              acceptedData[res['date']] = acceptedData[res['date']] + 1;
            }
            else{
              acceptedData[res['date']] = 1;
            }
          }
          else if (obj['status'] === 'REJECTED') {
            if(rejectedData[res['date']]){
              rejectedData[res['date']] = rejectedData[res['date']] + 1;
            }
            else{
              rejectedData[res['date']] = 1;
            }
          }
        })
        setRows([]);
        setRows(tmp);
        let Dates = tmp.map(val => {
          let x = val['date'];
          x = x.split('-')[0];
          return x;
        });
        let OptionData = tmp.map(val => val['quantity']);
        setBarDate(OptionData);
        tmp = [];
        let accepted = [], rejected = [], tmpDates = [], quantity = [];
        dateSet.forEach((value) => {
          accepted.push(acceptedData[value] || 0);
          rejected.push(rejectedData[value] || 0);
          quantity.push(quantityData[value]);
          let x = value.split('-')[0];
          if(x[0] === '0') x = x[1];
          tmpDates.push(x);
        });
        setAcceptedDate(accepted);
        setrejectetDate(rejected);
        setAreaCategories(tmpDates);
        setQuantityDate(quantity);
        accepted = [];
        rejected = [];
        tmpDates = [];
        quantity = [];
      }
      else {
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
    const headers = [["Date", "Drawing Number", "Inspector", "Quantity", "Status"]];

    const data = rows.map(res => [res.date, res.drawing, res.inspector, res.quantity, res.status]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`${month}_${year}_report.pdf`)
  }

  if(!isAuthenticated){
    return <Redirect to = '/login' />
  }
  
  if(role !== "Admin" && role !== "Monitor"){
    return <Redirect to = '/notAllowed' />
  }

  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ width: "100%", marginRight: 20 }}>
        <div className={classes.inputDiv}>
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
              startIcon={<SearchIcon/>}
              onClick={(e) => fetchDetails(e)}
            >Search</Button>
          </FormControl>
        </div>
        {(rows.length === 0) ? <div style={{ width: '100%', textAlign: 'center', marginTop: 100 }}>
          <img src={citylandscape} />
          <Typography color="secondary">No report found!</Typography>
        </div>
          :
          <div>
            <div style={{ width: '100%', marginTop: 30 }}>
              <Grid container spacing={5} justify="center">
                <Paper elevation={4} style={{marginRight: 20, marginBottom: 30}}>
                  <Grid item xs={12}>
                    <Chart
                      options={barOptions}
                      series={barSeries}
                      type="area"
                      width={450}
                      height={300}
                    />
                  </Grid>
                </Paper>
                <Paper elevation={4} style={{marginBottom: 30}}>
                  <Grid item xs={12}>
                    <Chart options={Areaoptions} series={Areaseries} type="area" width={450} height={300}/>
                  </Grid>
                </Paper>
              </Grid>
            </div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Button
                type="submit"
                color="secondary"
                variant="outlined"
                onClick={() => exportPDF()}
                className={classes.submit}
                style={{ minWidth: 200 }}
                startIcon={<SaveAltIcon />}
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
                      <TableCell align="right" className={classes.heading}><BarChartRoundedIcon className={classes.iconStyle} />Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows && rows.map((row) => (
                      <TableRow key={row.drawing}>
                        <TableCell className={classes.data} align="right">{row.date}</TableCell>
                        <TableCell className={classes.data} align="right">{row.drawing}</TableCell>
                        <TableCell className={classes.data} align="right">{row.inspector}</TableCell>
                        <TableCell className={classes.data} align="right">{row.quantity}</TableCell>
                        {row.status === "ACCEPTED" && <TableCell align="right" style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>   <Chip
                          icon={<CheckCircleOutlineIcon style={{ color: 'white' }} />}
                          label="ACCEPTED"
                          style={{ backgroundColor: '#32CD32', color: 'white' }}
                        /></TableCell>}
                        {row.status === "REJECTED" && <TableCell align="right" style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>   <Chip
                          icon={<CancelOutlinedIcon style={{ color: 'white' }} />}
                          label="REJECTED"
                          color="secondary"
                          style={{ backgroundColor: '#DC143C', color: 'white', minWidth: 120 }}
                        /></TableCell>}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        }
      </div>
    </div >
  );
}

const mapState = state => ({
  isAuthenticated: state.loginReducer.isAuthenticated,
  role: state.loginReducer.role,
})

export default connect(mapState)(Report);
